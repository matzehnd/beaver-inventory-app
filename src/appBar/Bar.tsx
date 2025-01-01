import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

export const Bar: FC = () => {
  return (
    <AppBar sx={{ mb: 2 }} position="sticky">
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Button color="inherit" component={Link} to={"/"}>
            <Typography variant="h6">Bävergården</Typography>
          </Button>
          <Button color="inherit" component={Link} to={"/login"}>
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
