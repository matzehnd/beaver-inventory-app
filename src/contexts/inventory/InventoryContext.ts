import { createContext } from "react";
import { Product } from "../../core/product";
import { Batch } from "../../core/batch";
import { Location } from "../../core/location";
import { ProductStock } from "../../core/productStock";
import { Dayjs } from "dayjs";
import { StockItem } from "../../core/stockItem";

export interface InventoryContext {
  products: ReadonlyArray<Product>;
  batches: ReadonlyArray<Batch>;
  locations: ReadonlyArray<Location>;
  productStock: ReadonlyArray<ProductStock>;
  stockItems: ReadonlyArray<StockItem>;
  load: () => Promise<void>;
  addToInventory: (
    product: Product,
    quantity: number,
    date: Dayjs
  ) => Promise<void>;
}

export const InventoryContex = createContext<InventoryContext>({
  products: [],
  batches: [],
  locations: [],
  productStock: [],
  stockItems: [],
  load: () => Promise.resolve(),
  addToInventory: () => Promise.resolve(),
});
