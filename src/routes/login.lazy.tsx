import { createLazyFileRoute } from "@tanstack/react-router";
import { Login } from "../login.tsx/Login";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
