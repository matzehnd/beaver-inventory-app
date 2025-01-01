import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <Card>
      <CardContent>
        <Stack direction={"column"} spacing={2}>
          <TextField id="email" label="E-Mail" variant="outlined" />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Stack direction={"row"} spacing={2} justifyContent={"end"}>
            <Button variant="contained">Login</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
