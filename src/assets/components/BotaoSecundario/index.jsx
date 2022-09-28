import styles from './botaoSecundario.module.css';

export default function BotaoSecundario({texto}){
    return(
        <>
            <input type='button' className={styles.botao__secundario} value={texto} />
        </>
    );
}