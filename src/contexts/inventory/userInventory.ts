import { useCallback, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { Product } from "../../core/product";
import { Location } from "../../core/location";
import { Batch } from "../../core/batch";
import { useClientContext } from "../../clients/useClientContext";
import { ProductStock } from "../../core/productStock";
import { v4 } from "uuid";
import { Dayjs } from "dayjs";
import { CONSTANTS } from "../../Constants";
import { StockItem } from "../../core/stockItem";

export const useInventory: () => InventoryContext = () => {
  const { inventoryClient } = useClientContext();
  const [products, setProducts] = useState<ReadonlyArray<Product>>([]);
  const [productStock, setProductStock] = useState<ReadonlyArray<ProductStock>>(
    []
  );
  const [batches, setBatches] = useState<ReadonlyArray<Batch>>([]);
  const [locations, setLocations] = useState<ReadonlyArray<Location>>([]);
  const [stockItems, setStockItems] = useState<ReadonlyArray<StockItem>>([]);

  const loadLocations = useCallback(() => {
    return inventoryClient.getLocations().then((res) => {
      setLocations(
        res.data.length
          ? res.data.map((r) => ({
              id: r.id,
              name: r.name,
            }))
          : [
              {
                id: v4(),
                name: "Butik",
              },
            ]
      );
    });
  }, [inventoryClient]);

  const loadbatches = useCallback(() => {
    return inventoryClient.getBatches().then((res) => {
      setBatches(
        res.data.map((r) => ({
          id: r.id,
          producedAt: new Date(r.producedAt),
          product: r.product,
          sellLatestAt: new Date(r.sellLatesAt),
        }))
      );
    });
  }, [inventoryClient]);

  const addToInventory: (
    product: Product,
    quantity: number,
    date: Dayjs
  ) => Promise<void> = useCallback(
    (product, quantity, date) => {
      return inventoryClient
        .stockChange(
          {
            id: v4(),
            producedAt: date.toDate(),
            product,
            sellLatestAt: date
              .add(CONSTANTS.shelfLifes.egg.days, "day")
              .toDate(),
          },
          CONSTANTS.locations.butik,
          quantity
        )
        .then(() => undefined);
    },
    [inventoryClient]
  );
  const takeFromInventory: (batch: Batch, quantity: number) => Promise<void> =
    useCallback(
      (batch, quantity) => {
        return inventoryClient
          .stockChange(batch, CONSTANTS.locations.butik, quantity * -1)
          .then(() => undefined);
      },
      [inventoryClient]
    );

  const loadProducts = useCallback(() => {
    return inventoryClient.getProducts().then((res) => {
      console.log("res.data :>> ", res.data);
      setProducts(
        res.data.length
          ? res.data.map((r) => ({
              id: r.id,
              name: r.name,
            }))
          : [
              {
                id: v4(),
                name: "Ägg",
              },
            ]
      );
      setProductStock(
        res.data.map((r) => ({
          id: r.id,
          name: r.name,
          quantity: r.quantity,
        }))
      );
    });
  }, [inventoryClient]);

  const loadStockItems = useCallback(() => {
    return inventoryClient.getStock().then((res) => {
      setStockItems(
        res.data.map<StockItem>((s) => ({
          batchId: s.batchId,
          locationId: s.locationId,
          quantity: s.quantity as { unit: "pcs"; amount: number },
        }))
      );
    });
  }, [inventoryClient]);

  const load = useCallback(async () => {
    await Promise.allSettled([
      loadProducts(),
      loadLocations(),
      loadbatches(),
      loadStockItems(),
    ]);
  }, [loadLocations, loadProducts, loadStockItems, loadbatches]);
  return {
    products,
    batches,
    locations,
    productStock,
    stockItems,
    load,
    addToInventory,
    takeFromInventory,
  };
};
