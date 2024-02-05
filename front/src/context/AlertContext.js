import React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const AlertContext = React.createContext();
AlertContext.displayName = 'AlertKK'

export const AlertProvider = ({ children }) => {
    var [message, setMessage] = useState('');
    var [variant, setVariant] = useState('danger');
    var [show, setShow] = useState(false);

    async function handleShow() {
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    useEffect(() => {
        handleShow()
    }, [show])

    return (
        <>
            <AlertContext.Provider
                value={{
                    message,
                    setMessage,
                    variant,
                    setVariant,
                    show,
                    setShow
                }}
            >
                {children}
            </AlertContext.Provider>
        </>
    );
}
