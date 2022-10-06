import { createContext } from "react";
import { produtos } from '../assets/utils/produtos';

export const ProdutosContext = createContext();

export default function ProdutosContextProvider({ children }){

    const categorias = produtos.map(categoria => categoria);

    return(
        <ProdutosContext.Provider value={{ categorias, produtos }}>
            { children }
        </ProdutosContext.Provider>
    );
}