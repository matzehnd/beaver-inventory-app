import { useCallback, useEffect, useMemo, useState } from "react";
import { UserContextData } from "./UserContext";

export const useUser: () => UserContextData = () => {
  const [token, setToken] = useState<string>();
  const isLoggedIn = useMemo(() => token !== undefined, [token]);
  const logout = useCallback(() => {
    setToken(undefined);
    localStorage.removeItem("token");
  }, []);

  const persistToken = useCallback((token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  }, []);

  const reload = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  };
  useEffect(() => reload(), []);
  return {
    token,
    isLoggedIn,
    setToken: persistToken,
    logout,
  };
};
