import { Link } from 'react-router-dom';
import styles from './cardProduto.module.css';

export default function CardProduto({admin, produto}){
    return(
        <div className={styles.card}>
            <img className={styles.imagem__produto} src={produto.imagem} alt='Foto do produto' />
            <h4 className={styles.nome__produto}>{produto.nome}</h4>
            <p className={styles.preco__produto}>{produto.preco}</p>
            {
                admin ?
                <p>#{produto.id}</p>
                :
                <Link to={`/produtos/${produto.id}`}>
                    <p className={styles.verProduto}>Ver produto</p>
                </Link>
            }
        </div>
    );
}