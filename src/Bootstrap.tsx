import { FC } from "react";
import { Bar } from "./appBar/Bar";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { useUserContext } from "./user/useUserContext";
import { Login } from "./login.tsx/Login";

export const Bootstrap: FC = () => {
  const user = useUserContext();
  return (
    <>
      <Bar isLoggedIn={user.isLoggedIn} logout={user.logout} />
      <Box sx={{ mx: 2 }}>{user.isLoggedIn ? <Outlet /> : <Login />}</Box>
    </>
  );
};
