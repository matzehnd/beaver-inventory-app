import { createContext } from "react";

interface UserContextData {
  isLoggedIn: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  token: string | undefined;
}

export const UserContex = createContext<UserContextData>({
  isLoggedIn: false,
  setToken: () => {},
  token: undefined,
});
