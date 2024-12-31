import { Product } from "./product";

export type Batch = {
  id: string;
  product: Product;
  ProducedAt: Date;
  SellLatestAt: Date;
};
