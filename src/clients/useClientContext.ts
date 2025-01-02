import { useContext } from "react";
import { ClientContext } from "./ClientContext";

export const useClientContext = () => useContext(ClientContext);
