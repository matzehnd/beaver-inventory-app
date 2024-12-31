import React from "react";
import { Stack } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList: React.FC<{
  products: { id: string; name: string; stock: number }[];
}> = ({ products }) => {
  return (
    <Stack direction={"column"} spacing={2}>
      {products.map((product) => (
        <ProductCard name={product.name} stock={product.stock} />
      ))}
    </Stack>
  );
};

export default ProductList;
