import { FC, useCallback } from "react";
import { LoginComponent } from "./Login.component";
import { useTextField } from "../helpers/useTextField";
import { useClientContext } from "../clients/useClientContext";
import { useUserContext } from "../contexts/user/useUserContext";
import { useNavigate } from "@tanstack/react-router";

export const Login: FC = () => {
  const email = useTextField();
  const password = useTextField();
  const { authClient } = useClientContext();
  const { setToken } = useUserContext();
  const navigate = useNavigate();
  const onSend = useCallback(
    () =>
      authClient
        .getToken(email.value, password.value, 1)
        .then((a) => {
          setToken(a.data.token);
          navigate({ to: "/" });
        })
        .catch(() => password.set("")),
    [authClient, email.value, password, setToken, navigate]
  );
  return <LoginComponent email={email} password={password} onSend={onSend} />;
};
