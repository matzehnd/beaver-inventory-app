import { createContext } from "react";
import { Product } from "../../core/product";
import { Batch } from "../../core/batch";
import { Location } from "../../core/location";
import { ProductStock } from "../../core/productStock";

export interface InventoryContext {
  products: ReadonlyArray<Product>;
  batches: ReadonlyArray<Batch>;
  locations: ReadonlyArray<Location>;
  productStock: ReadonlyArray<ProductStock>;
  load: () => Promise<void>;
}

export const InventoryContex = createContext<InventoryContext>({
  products: [],
  batches: [],
  locations: [],
  productStock: [],
  load: () => Promise.resolve(),
});
