import styles from './secao.module.css';
import seta from '../../images/Arrow.png';
import CardProduto from '../CardProduto';
import { useContext } from 'react';
import { ScreenContext } from '../../../contexts/ScreenContext';

export default function Secao({ titulo, produtos }) {

   const { desktopScreen } = useContext(ScreenContext);
   let contador = 0;

   return (
      <section className={styles.secao__produtos}>
         <div className='container'>
            <div className={styles.titulo}>
               <h3>{titulo}</h3>
               <div className={styles.verTudo}>
                  <p>Ver tudo</p>
                  <img src={seta} alt='Seta indicando para a direita' className={styles.seta} />
               </div>
            </div>
            <div className={styles.produtos}>
               {desktopScreen
                  ?
                  produtos.map(produto => {
                     return <CardProduto admin={false} produto={produto} key={produto.id} />
                  })
                  :
                  produtos.map(produto => {
                     contador++;
                     if (contador < 5) {
                        return <CardProduto admin={false} produto={produto} key={produto.id} />
                     }
                  })
               }
            </div>
         </div>
      </section>
   );
}