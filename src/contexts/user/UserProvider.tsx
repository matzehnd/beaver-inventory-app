import { FC, PropsWithChildren } from "react";
import { UserContex } from "./UserContext";
import { useUser } from "./useUser";

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = useUser();
  return <UserContex.Provider value={user}>{children}</UserContex.Provider>;
};
