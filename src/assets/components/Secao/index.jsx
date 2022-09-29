import styles from './secao.module.css';
import seta from '../../images/Arrow.png';
import CardProduto from '../CardProduto';
import { useState } from 'react';

export default function Secao({titulo, produtos}) {

   const [desktopScreen, setDesktopScreen] = useState();

   function checarMedia() {
      if (window.matchMedia('(min-width: 1300px)').matches) {
         setDesktopScreen(true);
      } else {
         setDesktopScreen(false);
      }
   }
   window.addEventListener('load', checarMedia);
   window.addEventListener('resize', checarMedia);

   return (
      <section className={styles.secao__produtos}>
         <div className={styles.container__produtos}>
            <div className={styles.secao__titulo}>
               <h3 className={styles.secao__produtos__titulo}>{titulo}</h3>
               <a href='#'>Ver tudo <img src={seta} alt='Seta indicando para a direita' className={styles.seta} /></a>
            </div>
            <div className={styles.produtos}>
               {desktopScreen
                  ?
                  produtos.map(produto => {
                     return <CardProduto nomeProduto={produto.nome} imagem={produto.imagem} preco={produto.preco} key={produto.id} />
                  })
                  :
                  produtos.map(produto => {
                     if (produto.id < 5) {
                        return <CardProduto nomeProduto={produto.nome} imagem={produto.imagem} preco={produto.preco} key={produto.id} />
                     }
                  })
               }
            </div>
         </div>
      </section>
   );
}