import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProdutosContext } from '../../../contexts/ProdutosContext';
import { produtos } from '../../utils/produtos';
import styles from './descricaoProduto.module.css';

export default function DescricaoProduto() {

    const parametros = useParams();
    // const { produtosPorCategoria } = useContext(ProdutosContext);

    // const produto = produtosPorCategoria.filter(produtos => produtos.produtos.find(produto => produto.id === 1));
    const produto = produtos.filter(categorias => categorias.produtos.find(produto => produto.id));
   
    return (
        <section className={`${styles.secao__descricaoProduto} container`}>
            {/* <img src={produto.imagem} alt='Foto do produto' /> */}
            {console.log(produto)}
        </section>
    );
}