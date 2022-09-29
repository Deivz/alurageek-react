import styles from './secao.module.css';
import seta from '../../images/Arrow.png';
import { consoleProdutos, swProdutos } from '../../utils/produtos.js';
import CardProduto from '../CardProduto';
import { useState } from 'react';

export default function Secao() {

   const PRODUTOS = {
      'Star Wars': swProdutos,
      'Consoles': consoleProdutos,
   };

   const [desktopScreen, setDesktopScreen] = useState(false);

   function checarMedia() {
      if (window.matchMedia('(min-width: 1300px)').matches) {
         setDesktopScreen(true);
      } else {
         setDesktopScreen(false);
      }
   }

   window.addEventListener('resize', checarMedia);

   return (
      <section className={styles.secao__produtos}>

         {
            Object.keys(PRODUTOS).map(tipoProduto => {
               return (
                  <div className={styles.container__produtos} key={Object.keys(PRODUTOS).at(Object.keys(PRODUTOS).indexOf(tipoProduto))}>
                     <div className={styles.secao__titulo}>
                        <h3 className={styles.secao__produtos__titulo}>{tipoProduto}</h3>
                        <a href='#'>Ver tudo <img src={seta} alt='Seta indicando para a direita' className={styles.seta} /></a>
                     </div>
                     <div className={styles.produtos}>
                        {desktopScreen
                           ?
                           Object.values(PRODUTOS).at(Object.keys(PRODUTOS).indexOf(tipoProduto)).map(produto => {
                              return <CardProduto nomeProduto={produto.nome} imagem={produto.imagem} preco={produto.preco} key={produto.id} />
                           })
                           :
                           Object.values(PRODUTOS).at(Object.keys(PRODUTOS).indexOf(tipoProduto)).map(produto => {
                              if (produto.id < 5) {
                                 return <CardProduto nomeProduto={produto.nome} imagem={produto.imagem} preco={produto.preco} key={produto.id} />
                              }
                           })
                        }
                     </div>
                  </div>
               );
            })
         }
      </section>
   );
}