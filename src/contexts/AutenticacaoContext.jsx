import { createContext, useEffect, useState } from "react";

export const AutenticacaoContext = createContext();

export default function AutenticacaoContextProvider({ children }) {

    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setAutenticado(true);
        }
    }, []);

    return (
        <AutenticacaoContext.Provider value={{ autenticado, setAutenticado }}>
            {children}
        </AutenticacaoContext.Provider>
    );
}