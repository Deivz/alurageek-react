import styles from './cardProduto.module.css';

export default function CardProduto({imagem, nomeProduto, preco}){
    return(
        <div className={styles.card}>
            <img className={styles.imagem__produto} src={imagem} alt='Foto do produto' />
            <h4 className={styles.nome__produto}>{nomeProduto}</h4>
            <p className={styles.preco__produto}>{preco}</p>
            <a href='#'>Ver produto</a>
        </div>
    );
}