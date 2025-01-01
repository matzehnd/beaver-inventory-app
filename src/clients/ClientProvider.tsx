import { FC, PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { ClientContext } from "./ClientContext";
import { AuthClient } from "./auth.client";
import { UserContex } from "../user/UserContext";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useMemo(() => new AuthClient(import.meta.env.AUTH_API), []);
  const { token } = useContext(UserContex);
  useEffect(() => {
    if (typeof token === "string") {
      client.setToken(token);
    }
  }, [token, client]);
  return (
    <ClientContext.Provider value={{ authClient: client }}>
      {children}
    </ClientContext.Provider>
  );
};
