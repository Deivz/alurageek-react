import styles from './paginaPadrao.module.css';
import logo from '../../images/Logo.png';
import BotaoSecundario from '../BotaoSecundario';
import Lupa from '../Lupa';
import { Link, Outlet } from 'react-router-dom';
import { TextField } from '@mui/material';
import BotaoPrimario from '../BotaoPrimario';

export default function PaginaPadrao() {
   return (
      <>
         <header className={styles.secao__cabecalho}>
            <div className={styles.container__cabecalho}>
               <h1><Link to='/'><img src={logo} alt='Logo da Alura Geek' className={styles.logo__topo} /></Link></h1>
               <div className={styles.login}><Link to='login'><BotaoSecundario texto='Login' classe='login' /></Link></div>
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
         <footer className={styles.rodape}>
            <div className={styles.secao__infos__rodape}>
               <div className={styles.container__rodape}>
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
            <div className={styles.secao__dev__rodape}>
               <p>Desenvolvido por Davi Oliveira</p>
               <p>2022</p>
            </div>
         </footer>
      </>

   );
}