import styles from './banner.module.css';
import BotaoPrimario from '../BotaoPrimario';

export default function Banner(){
    return(
        <section className={styles.secao__banner}>
            <div className={styles.container__banner}>
                <h2>Dezembro promocional</h2>
                <p>Produtos selecionados com 33% de desconto</p>
                <BotaoPrimario texto='Ver consoles' />
            </div>
        </section>
    );
}