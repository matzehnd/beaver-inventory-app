import { useCallback, useMemo, useState } from "react";
import { UserContextData } from "./UserContext";

export const useUser: () => UserContextData = () => {
  const [token, setToken] = useState<string>();
  const isLoggedIn = useMemo(() => token !== undefined, [token]);
  const logout = useCallback(() => {
    setToken(undefined);
  }, []);

  return {
    token,
    isLoggedIn,
    setToken,
    logout,
  };
};
