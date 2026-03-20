import { useState } from "react";

export const StatusTogle = () => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <button
      onClick={() => setIsOnline(!isOnline)}
      className={`text-white px-4 py-2 rounded ${isOnline ? "bg-green-500" : "bg-red-500"}`}
    >
      {isOnline ? "En Linea" : "Desconectaddo"}
    </button>
  );
};
