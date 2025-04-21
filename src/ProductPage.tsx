import { Card, Stack, Typography } from "@mui/material";
import { useParams } from "@tanstack/react-router";
import { FC, useMemo } from "react";
import { useInventoryContext } from "./contexts/inventory/useInventoryContext";

export const ProductPage: FC = () => {
  const { productId } = useParams({ from: "/products/$productId" });
  const {
    products,
    stockItems: allStockItems,
    batches: allBatches,
  } = useInventoryContext();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId, products]
  );
  const batches = useMemo(
    () => allBatches.filter((b) => b.product.id === productId),
    [allBatches, productId]
  );
  const stockItems = useMemo(
    () =>
      allStockItems.filter((i) => batches.map((b) => b.id).includes(i.batchId)),
    [allStockItems, batches]
  );
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent={"center"}>
        <Typography variant="h2">{product?.name}</Typography>
      </Stack>
      <Stack spacing={2}>
        {stockItems.map((i) => (
          <Card>{i.batchId}</Card>
        ))}
      </Stack>
    </Stack>
  );
};
