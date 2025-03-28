import { useContext } from "react";
import { UserContex } from "./UserContext";

export const useUserContext = () => useContext(UserContex);
