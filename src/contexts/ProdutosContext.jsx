import { createContext } from "react";
import { produtos } from '../assets/utils/produtos';

export const ProdutosContext = createContext();

export default function ProdutosContextProvider({ children }){

    // const produtosPorCategoria = produtos.map(categoria => categoria.produtos);

    return(
        <ProdutosContext.Provider value={{ produtos }}>
            { children }
        </ProdutosContext.Provider>
    );
}