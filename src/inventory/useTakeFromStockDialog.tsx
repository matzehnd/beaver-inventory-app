import { useInventoryContext } from "../contexts/inventory/useInventoryContext";
import { Batch } from "../core/batch";
import { StockItem } from "../core/stockItem";
import { useDialog } from "../helpers/useDialog";
import { TakeFromStock } from "./TakeFromStock";

export const useTakeFromStockDialog = (batch: Batch, stockItem: StockItem) => {
  const { load, takeFromInventory } = useInventoryContext();
  const { close, Dialog, open } = useDialog(
    <TakeFromStock
      takeFromStock={(amount) => {
        return takeFromInventory(batch, amount).then(close).finally(load);
      }}
      maxAmount={stockItem.quantity.amount}
    />,
    "Auslagern"
  );
  return {
    AddToStockDialog: Dialog,
    openAddToStockDialog: open,
  };
};
