import React from "react";
import { Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductStock } from "../core/productStock";

const ProductList: React.FC<{
  products: ReadonlyArray<ProductStock>;
}> = ({ products }) => {
  console.log("products :>> ", products);
  return (
    <Stack direction={"column"} spacing={2}>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          stock={product.quantity.amount}
          key={product.id}
        />
      ))}
    </Stack>
  );
};

export default ProductList;
