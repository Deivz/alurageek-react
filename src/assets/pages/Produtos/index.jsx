import BotaoPrimario from '../../components/BotaoPrimario';
import CardProduto from '../../components/CardProduto';
import titulo from '../../components/Secao/secao.module.css';
import styles from './produtos.module.css';
import { produtos } from '../../utils/produtos';
import { useContext } from 'react';
import { ScreenContext } from '../../../contexts/ScreenContext';

export default function Produtos() {

    const { desktopScreen } = useContext(ScreenContext);

    return (
        <section className={styles.secao__produtos}>
            <div className='container'>
                <div className={styles.topo__produtos}>
                    <h2 className={titulo.secao__produtos__titulo}>Todos os produtos</h2>
                    <BotaoPrimario classe='adicionarProduto' texto='Adicionar Produto' tipo='button' />
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