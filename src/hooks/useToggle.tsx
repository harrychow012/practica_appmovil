import { useState } from "react";

export const useToggle = (valorInicial: boolean = false) => {
  const [value, setValue] = useState(valorInicial);

  const toggleValue = () => {
    setValue((previus) => !previus);
  };
  return { value, toggleValue };
};
