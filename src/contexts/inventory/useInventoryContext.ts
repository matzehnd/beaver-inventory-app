import { useContext } from "react";
import { InventoryContex } from "./InventoryContext";

export const useInventoryContext = () => useContext(InventoryContex);
