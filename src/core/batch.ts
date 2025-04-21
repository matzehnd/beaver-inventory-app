import { Product } from "./product";

export type Batch = {
  id: string;
  product: Product;
  producedAt: Date;
  sellLatestAt: Date;
};
