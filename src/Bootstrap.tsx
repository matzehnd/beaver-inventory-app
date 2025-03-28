import { FC } from "react";
import { Bar } from "./appBar/Bar";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { useUserContext } from "./contexts/user/useUserContext";
import { Login } from "./login.tsx/Login";
import { InventoryProvider } from "./contexts/inventory/InventoryProvider";

export const Bootstrap: FC = () => {
  const user = useUserContext();
  return (
    <>
      <Bar isLoggedIn={user.isLoggedIn} logout={user.logout} />
      <Box sx={{ mx: 2 }}>
        {user.isLoggedIn ? (
          <InventoryProvider>
            <Outlet />
          </InventoryProvider>
        ) : (
          <Login />
        )}
      </Box>
    </>
  );
};
