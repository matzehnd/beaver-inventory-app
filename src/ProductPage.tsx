import { Card, CardContent, Fab, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";
import InboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import { useParams } from "@tanstack/react-router";
import { FC, useEffect, useMemo } from "react";
import { useInventoryContext } from "./contexts/inventory/useInventoryContext";
import { dateAsFormattedDay } from "./helpers/dateAsFormattedDay";
import { useAddToStockDialog } from "./inventory/useAddToStockDialog";

export const ProductPage: FC = () => {
  const { productId } = useParams({ from: "/products/$productId" });
  const { AddToStockDialog, openAddToStockDialog } = useAddToStockDialog();
  const {
    stockItems: allStockItems,
    batches: allBatches,
    productStock,
    load,
  } = useInventoryContext();
  const product = useMemo(
    () => productStock.find((p) => p.id === productId),
    [productId, productStock]
  );
  const batches = useMemo(
    () => allBatches.filter((b) => b.product.id === productId),
    [allBatches, productId]
  );
  const stockItems = useMemo(
    () =>
      allStockItems
        .filter((i) => batches.map((b) => b.id).includes(i.batchId))
        .sort(
          (a, b) =>
            batches
              .find((batch) => batch.id == a.batchId)!
              .producedAt.getTime() -
            batches.find((batch) => batch.id == b.batchId)!.producedAt.getTime()
        ),
    [allStockItems, batches]
  );
  useEffect(() => {
    load();
  }, [load]);
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h4" fontWeight={500}>
            {product?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total: {product?.quantity.amount}
          </Typography>
        </Stack>
        <Fab
          color="primary"
          size="medium"
          sx={{ boxShadow: 0 }}
          onClick={openAddToStockDialog}
        >
          <InboxOutlinedIcon sx={{ color: "black" }} />
        </Fab>
      </Stack>
      <Stack spacing={2}>
        {stockItems.map((i) => {
          const batch = batches.find((b) => b.id === i.batchId);
          return (
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <CalendarTodayOutlinedIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {dateAsFormattedDay(batch?.producedAt)}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <BarChartOutlinedIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Menge: {i.quantity.amount}
                    </Typography>
                  </Stack>

                  <Fab sx={{ boxShadow: 0 }} color="primary" size="medium">
                    <OutboxOutlinedIcon sx={{ color: "black" }} />
                  </Fab>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
      {AddToStockDialog}
    </Stack>
  );
};
