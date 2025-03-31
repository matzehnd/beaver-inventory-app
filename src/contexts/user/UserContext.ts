import { createContext } from "react";

export interface UserContextData {
  isLoggedIn: boolean;
  setToken: (token: string) => void;
  token: string | undefined;
  logout: () => void;
}

export const UserContex = createContext<UserContextData>({
  isLoggedIn: false,
  setToken: () => {},
  logout: () => {},
  token: undefined,
});
