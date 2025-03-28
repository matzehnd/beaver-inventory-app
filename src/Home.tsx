import React, { useEffect } from "react";
import ProductList from "./inventory/ProductList";
import { Fab, IconButton, Stack } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import { useInventoryContext } from "./contexts/inventory/useInventoryContext";
const Home: React.FC = () => {
  const { productStock, load } = useInventoryContext();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Stack direction={"column"}>
      <ProductList products={productStock} />
      <IconButton onClick={load}>
        <CachedIcon />
      </IconButton>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </Stack>
  );
};

export default Home;
