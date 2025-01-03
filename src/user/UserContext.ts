import { createContext } from "react";

export interface UserContextData {
  isLoggedIn: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  token: string | undefined;
  logout: () => void;
}

export const UserContex = createContext<UserContextData>({
  isLoggedIn: false,
  setToken: () => {},
  logout: () => {},
  token: undefined,
});
