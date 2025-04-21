import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "../ProductPage";

export const Route = createFileRoute("/products/$productId")({
  component: ProductPage,
});
