import BotaoPrimario from '../../components/BotaoPrimario';
import CardProduto from '../../components/CardProduto';
import styles from './produtos.module.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import http from '../../../http/index.js';
import { BuscaContext } from '../../../contexts/BuscaContext';

export default function Produtos() {

    const [categorias, setCategorias] = useState([]);

    const { busca } = useContext(BuscaContext);

    useEffect(() => {
        http.get('/categorias')
            .then(categoria => {
                setCategorias(categoria.data);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <section className={styles.secao__produtos}>
            <div className='container'>
                <div className={styles.topo__produtos}>
                    <h3>Todos os produtos</h3>
                    <Link to='/produtos/adicionar'>
                        <BotaoPrimario classe='adicionarProduto' texto='Adicionar Produto' tipo='button' />
                    </Link>
                </div>
                <div className={styles.produtos}>
                    {(busca === '') ?
                        categorias.map(categoria => {
                            return categoria.produtos.map(produto => {
                                return <CardProduto admin={true} produto={produto} key={produto.id} />
                            })
                        })
                        :
                        categorias.map(categoria => {
                            return categoria.produtos.map(produto => {
                                if(produto.nome.toUpperCase().includes(busca.toUpperCase(busca))){
                                    return <CardProduto admin={true} produto={produto} key={produto.id} />
                                }
                            })
                        })
                    }
                </div>
            </div>
        </section>
    );
}