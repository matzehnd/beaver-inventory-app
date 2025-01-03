import { createContext } from "react";
import { AuthClient } from "./auth.client";
import { InventoryClient } from "./inventory.client";

export const ClientContext = createContext({
  authClient: new AuthClient(import.meta.env.VITE_AUTH_API),
  inventoryClient: new InventoryClient(import.meta.env.VITE_INVENTORY_API),
});
