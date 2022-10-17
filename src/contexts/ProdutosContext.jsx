import { createContext } from "react";
import { produtos } from '../assets/utils/produtos';

export const ProdutosContext = createContext();

export default function ProdutosContextProvider({ children }) {

    const produtosArmazenados = JSON.parse(sessionStorage.getItem('produtos'));

    if (produtosArmazenados) {
        produtosArmazenados.map(produto => {
            const indice = produtos.findIndex(categoria => categoria.titulo === produto.categoria);
            produtos[indice].produtos.push(produto);
        });
    }

    const categorias = produtos.map(categoria => categoria);

    const quantidadeProdutos = produtos.map(produtos => produtos.produtos.length);
    let totalProdutos = quantidadeProdutos.reduce((totalProdutos, produto) => totalProdutos + produto, 0);

    return (
        <ProdutosContext.Provider value={{ categorias, produtos, totalProdutos, setTotalProdutos }}>
            {children}
        </ProdutosContext.Provider>
    );
}