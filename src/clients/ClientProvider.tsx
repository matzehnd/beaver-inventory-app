import { FC, PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { ClientContext } from "./ClientContext";
import { AuthClient } from "./auth.client";
import { UserContex } from "../contexts/user/UserContext";
import { InventoryClient } from "./inventory.client";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const authClient = useMemo(
    () => new AuthClient(import.meta.env.VITE_AUTH_API),
    []
  );
  const inventoryClient = useMemo(
    () => new InventoryClient(import.meta.env.VITE_INVENTORY_API),
    []
  );
  const { token } = useContext(UserContex);
  useEffect(() => {
    if (typeof token === "string") {
      authClient.setToken(token);
      inventoryClient.setToken(token);
    }
  }, [token, authClient, inventoryClient]);
  return (
    <ClientContext.Provider value={{ authClient, inventoryClient }}>
      {children}
    </ClientContext.Provider>
  );
};
