import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

interface Props {
  isLoggedIn: boolean;
  logout: () => void;
}
export const Bar: FC<Props> = ({ isLoggedIn, logout }) => {
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
          {isLoggedIn && (
            <IconButton color="inherit" onClick={logout}>
              <Logout />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
