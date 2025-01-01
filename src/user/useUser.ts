import { useMemo, useState } from "react";

export const useUser = () => {
  const [token, setToken] = useState<string>();
  const isLoggedIn = useMemo(() => token === undefined, [token]);

  return {
    token,
    isLoggedIn,
    setToken,
  };
};
