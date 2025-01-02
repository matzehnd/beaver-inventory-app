import { createContext } from "react";
import { AuthClient } from "./auth.client";

console.log(import.meta.env.VITE_AUTH_API);
export const ClientContext = createContext({
  authClient: new AuthClient(import.meta.env.VITE_AUTH_API),
});
