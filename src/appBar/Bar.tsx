import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export const Bar: FC = () => {
  return (
    <AppBar sx={{ mb: 2 }} position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bävergården
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
