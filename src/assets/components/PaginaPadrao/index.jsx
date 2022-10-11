import styles from './paginaPadrao.module.css';
import logo from '../../images/Logo.png';
import BotaoSecundario from '../BotaoSecundario';
import Lupa from '../Lupa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';
import BotaoPrimario from '../BotaoPrimario';
import { useContext, useEffect, useState } from 'react';
import { BuscaContext } from '../../../contexts/BuscaContext';

export default function PaginaPadrao() {

   const [logado, setLogado] = useState(false);
   const [loginOuProdutos, setLoginOuProdutos] = useState(false);
   const location = useLocation();


   const {busca, enviar, setBusca} = useContext(BuscaContext);

   useEffect(() => {
      if (sessionStorage.getItem('user')) {
         setLogado(true);
      }

      if (window.location.pathname === '/login' || window.location.pathname === '/produtos') {
         setLoginOuProdutos(true);
      } else {
         setLoginOuProdutos(false);
      }

   }, [[location]]);

   return (
      <>
         <header>
            <div className={`${styles.topo} container`}>
               <h1>
                  <Link to='/'>
                     <img src={logo} alt='Logo da Alura Geek' className={styles.logo__topo} />
                  </Link>
               </h1>
               <div className={styles.login}>
                  {
                     (logado && !loginOuProdutos) &&
                     <Link to='produtos'>
                        <BotaoSecundario texto='Menu administrador' classe='menuAdministrador' />
                     </Link>
                  }
                  {
                     (!logado && !loginOuProdutos) &&
                     <Link to='login'>
                        <BotaoSecundario texto='Login' classe='login' />
                     </Link>
                  }
               </div>
               <div className={styles.lupa}>
                  <Lupa />
               </div>
                  <form className={styles.buscar} onSubmit={enviar}>
                     <input type='text' placeholder='O que deseja encontrar?' className={styles.campo__busca} onChange={(e) => setBusca(e.target.value)} />
                     <i className={styles.icone__lupa}><Lupa /></i>
                  </form>
            </div>
         </header>
         <main>
            <Outlet />
         </main>
         <footer>
            <div className={styles.rodape__secaoUm}>
               <div className={`${styles.rodape} container`}>
                  <nav className={styles.nav__rodape}>
                     <h2 className={styles.logo__rodape}><img src={logo} alt='Logo da Alura Geek' /></h2>
                     <ul className={styles.lista__rodape}>
                        <li>Quem somos nós</li>
                        <li>Política de privacidade</li>
                        <li>Programa fidelidade</li>
                        <li>Nossas lojas</li>
                        <li>Quero ser franqueado</li>
                        <li>Anuncie aqui</li>
                     </ul>
                  </nav>
                  <form className={styles.formulario__rodape}>
                     <fieldset>
                        <legend>Fale conosco</legend>
                        <TextField
                           fullWidth
                           size="small"
                           label='Nome'
                           variant='filled'
                           sx={
                              {
                                 "& .MuiInputLabel-root": { color: 'gray' },
                                 "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' } },
                                 borderRadius: 4,
                                 marginTop: 2,
                                 marginBottom: 2,
                                 label: { fontFamily: 'Raleway', fontSize: 16 }
                              }
                           }
                        />
                        <TextField
                           fullWidth
                           size="small"
                           label='Escreva sua mensagem'
                           variant='filled'
                           multiline
                           rows={3}
                           sx={
                              {
                                 "& .MuiInputLabel-root": { color: 'gray' },
                                 "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' } },
                                 borderRadius: 4,
                                 marginTop: 2,
                                 marginBottom: 2,
                                 label: { fontFamily: 'Raleway', fontSize: 16 }
                              }
                           }
                        />
                        <BotaoPrimario classe='enviarMensagem' texto='Enviar mensagem' tipo='submit' />
                     </fieldset>
                  </form>
               </div>
            </div>
            <div className={styles.rodape__secaoDois}>
               <p>Desenvolvido por Davi Oliveira</p>
               <p>2022</p>
            </div>
         </footer>
      </>

   );
}