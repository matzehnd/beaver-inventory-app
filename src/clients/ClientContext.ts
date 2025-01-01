import { createContext } from "react";
import { AuthClient } from "./auth.client";

export const ClientContext = createContext({
  authClient: new AuthClient(import.meta.env.AUTH_API),
});
