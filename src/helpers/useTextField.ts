import { useState } from "react";

export const useTextField = () => {
  const [value, setValue] = useState<string>("");
  return {
    value,
    set: setValue,
  };
};
