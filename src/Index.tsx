import { Outlet } from "@tanstack/react-router";
import React from "react";
import { Bar } from "./appBar/Bar";
import { Box } from "@mui/material";
import { ClientProvider } from "./clients/ClientProvider";
import { UserProvider } from "./user/UserProvider";

export const Index = () => {
  return (
    <React.Fragment>
      <UserProvider>
        <ClientProvider>
          <Bar />
          <Box sx={{ mx: 2 }}>
            <Outlet />
          </Box>
        </ClientProvider>
      </UserProvider>
    </React.Fragment>
  );
};
