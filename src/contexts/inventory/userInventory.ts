import { useCallback, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { Product } from "../../core/product";
import { Location } from "../../core/location";
import { Batch } from "../../core/batch";
import { useClientContext } from "../../clients/useClientContext";
import { ProductStock } from "../../core/productStock";
import { v4 } from "uuid";

export const useInventory: () => InventoryContext = () => {
  const { inventoryClient } = useClientContext();
  const [products, setProducts] = useState<ReadonlyArray<Product>>([]);
  const [productStock, setProductStock] = useState<ReadonlyArray<ProductStock>>(
    []
  );
  const [batches, setBatches] = useState<ReadonlyArray<Batch>>([]);
  const [locations, setLocations] = useState<ReadonlyArray<Location>>([]);

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
          ProducedAt: new Date(r.producedAt),
          product: r.product,
          SellLatestAt: new Date(r.sellLatesAt),
        }))
      );
    });
  }, [inventoryClient]);

  const loadProducts = useCallback(() => {
    return inventoryClient.getProducts().then((res) => {
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

  const load = useCallback(async () => {
    await Promise.allSettled([loadProducts(), loadLocations(), loadbatches()]);
  }, [loadLocations, loadProducts, loadbatches]);
  return {
    products,
    batches,
    locations,
    productStock,
    load,
  };
};
