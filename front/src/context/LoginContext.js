import React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const LoginContext = React.createContext();
LoginContext.displayName = "LoginContextConcept";

export const LoginProvider = ({children}) => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <LoginContext.Provider
                value={{
                    cpf, setCpf,
                    password, setPassword
                }}
            >
                {children}
            </LoginContext.Provider>
        </>
    );
}