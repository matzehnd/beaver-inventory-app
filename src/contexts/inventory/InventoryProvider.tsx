import { FC, PropsWithChildren } from "react";
import { useInventory } from "./userInventory";
import { InventoryContex } from "./InventoryContext";

export const InventoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const inventory = useInventory();
  return (
    <InventoryContex.Provider value={inventory}>
      {children}
    </InventoryContex.Provider>
  );
};
