import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { onChangeEvent } from "../helpers/onChangeEvent";

interface Props {
  email: {
    value: string;
    set: (value: string) => void;
  };
  password: {
    value: string;
    set: (value: string) => void;
  };
  onSend: () => Promise<void> | void;
}

export const LoginComponent: FC<Props> = ({ email, password, onSend }) => {
  return (
    <Card>
      <CardContent onKeyDown={({ key }) => key === "Enter" && onSend()}>
        <Stack direction={"column"} spacing={2}>
          <TextField
            id="email"
            label="E-Mail"
            variant="outlined"
            value={email.value}
            onChange={onChangeEvent(email.set)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password.value}
            onChange={onChangeEvent(password.set)}
          />
          <Stack direction={"row"} spacing={2} justifyContent={"end"}>
            <Button onClick={onSend} variant="contained">
              Login
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
