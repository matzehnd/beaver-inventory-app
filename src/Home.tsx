import React from "react";
import ProductList from "./inventory/ProductList";
import { Stack } from "@mui/material";
const Home: React.FC = () => {
  const products = [
    { id: "1", name: "Eier", quantity: { amount: 16, unit: "pcs" } },
  ];

  return (
    <Stack direction={"column"}>
      <ProductList products={products} />
    </Stack>
  );
};

export default Home;
