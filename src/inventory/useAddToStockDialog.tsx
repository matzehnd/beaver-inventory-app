import { CONSTANTS } from "../Constants";
import { useInventoryContext } from "../contexts/inventory/useInventoryContext";
import { useDialog } from "../helpers/useDialog";
import { AddToStock } from "./AddToStock";

export const useAddToStockDialog = () => {
  const { load, addToInventory } = useInventoryContext();
  const { close, Dialog, open } = useDialog(
    <AddToStock
      stockChange={(amount, date) => {
        return addToInventory(CONSTANTS.products.egg, amount, date)
          .then(close)
          .finally(load);
      }}
    />,
    "Einlagern"
  );
  return {
    AddToStockDialog: Dialog,
    openAddToStockDialog: open,
  };
};
