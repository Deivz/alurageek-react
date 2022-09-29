import styles from './paginaPadrao.module.css';
import logo from '../../images/Logo.png';
import BotaoSecundario from '../BotaoSecundario';
import Lupa from '../Lupa';
import {Outlet} from 'react-router-dom';

export default function PaginaPadrao() {
    return (
        <>
            <header className={styles.secao__cabecalho}>
                <div className={styles.container__cabecalho}>
                    <h1><a href='#'><img src={logo} alt='Logo da Alura Geek' className={styles.logo} /></a></h1>
                    <div className={styles.login}><BotaoSecundario texto='Login' classe='login' /></div>
                    <div className={styles.lupa}><Lupa /></div>
                    <div className={styles.container__buscar}>
                        <input type='text' placeholder='O que deseja encontrar?' className={styles.campo__buscar} />
                        <i className={styles.icone__lupa}><Lupa /></i>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="container rodape">2022 - Desenvolvido por Carlos Davi.</div>
            </footer>
        </>

    );
}