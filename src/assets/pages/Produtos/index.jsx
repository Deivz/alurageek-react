import BotaoPrimario from '../../components/BotaoPrimario';
import CardProduto from '../../components/CardProduto';
import titulo from '../../components/Secao/secao.module.css';
import styles from './produtos.module.css';
import { produtos } from '../../utils/produtos';
import { Link } from 'react-router-dom';

export default function Produtos() {
    return (
        <section className={styles.secao__produtos}>
            <div className='container'>
                <div className={styles.topo__produtos}>
                    <h2 className={titulo.secao__produtos__titulo}>Todos os produtos</h2>
                    <Link to='/adicionar'>
                        <BotaoPrimario classe='adicionarProduto' texto='Adicionar Produto' tipo='button' />
                    </Link>
                </div>
                <div className={styles.produtos}>
                    {
                        produtos.map(categoria => {
                            return categoria.produtos.map(produto => {
                                return <CardProduto admin={true} produto={produto} key={produto.id} />
                            })
                        })
                    }
                </div>
            </div>
        </section>
    );
}