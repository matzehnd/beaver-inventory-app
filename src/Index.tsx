import React from "react";
import { ClientProvider } from "./clients/ClientProvider";
import { UserProvider } from "./user/UserProvider";
import { Bootstrap } from "./Bootstrap";

export const Index = () => {
  return (
    <React.Fragment>
      <UserProvider>
        <ClientProvider>
          <Bootstrap />
        </ClientProvider>
      </UserProvider>
    </React.Fragment>
  );
};
