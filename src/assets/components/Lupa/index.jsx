import { useContext } from 'react';
import { BuscaContext } from '../../../contexts/BuscaContext';
import lupa from '../../images/Lupa.svg';
import styles from './lupa.module.css';

export default function Lupa() {

    const {busca, setBusca} = useContext(BuscaContext);

    return (
        <>
            <img src={lupa} alt='Botão de pesquisar, ícone de uma lupa' className={styles.lupa} />
        </>
    );
}