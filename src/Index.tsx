import { Outlet } from "@tanstack/react-router";
import React from "react";
import { Bar } from "./appBar/Bar";

export const Index = () => {
  return (
    <React.Fragment>
      <Bar />
      <Outlet />
    </React.Fragment>
  );
};
