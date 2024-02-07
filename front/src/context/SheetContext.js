import React, { createContext } from "react";
import axios from "axios";

export const SheetContext = createContext();
SheetContext.displayName = "SheetContext";

export const SheetProvider = ({ children }) => {
  // Define your state variables here if needed
  // const [cpf, setCpf] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <SheetContext.Provider
      value={{
        // cpf, setCpf,
        // password, setPassword
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};
