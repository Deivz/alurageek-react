import styles from './botaoPrimario.module.css';

export default function BotaoPrimario({texto}){
    return(
        <>
            <input type='button' className={styles.botao__primario} value={texto} />
        </>
    );
}