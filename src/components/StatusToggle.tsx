// import { useState } from "react";
import { useToggle } from "../hooks/useToggle";

export const StatusTogle = () => {
  const {value: isOnline, toggleValue} = useToggle();

  return (
    <button
      onClick={toggleValue}
      className={`text-white px-4 py-2 rounded ${isOnline ? "bg-green-500" : "bg-red-500"}`}
    >
      {isOnline ? "En Linea" : "Desconectaddo"}
    </button>
  );
};
