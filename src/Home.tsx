import React, { useEffect } from "react";
import ProductList from "./inventory/ProductList";
import { Fab, IconButton, Stack } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { useInventoryContext } from "./contexts/inventory/useInventoryContext";
import { useAddToStockDialog } from "./inventory/useAddToStockDialog";
const Home: React.FC = () => {
  const { productStock, load } = useInventoryContext();
  const { AddToStockDialog, openAddToStockDialog } = useAddToStockDialog();

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
        onClick={openAddToStockDialog}
      >
        <MoveToInboxIcon />
      </Fab>
      {AddToStockDialog}
    </Stack>
  );
};

export default Home;
