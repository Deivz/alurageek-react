import styles from './secao.module.css';
import seta from '../../images/Arrow.png';
import CardProduto from '../CardProduto';
import { useContext } from 'react';
import { ScreenContext } from '../../../contexts/ScreenContext';
// import { useState } from 'react';

export default function Secao({titulo, produtos}) {

   const {desktopScreen} = useContext(ScreenContext);

   return (
      <section className={styles.secao__produtos}>
         <div className={`${styles.container__produtos} container`}>
            <div className={styles.secao__titulo}>
               <h3 className={styles.secao__produtos__titulo}>{titulo}</h3>
               <a href='#'>Ver tudo <img src={seta} alt='Seta indicando para a direita' className={styles.seta} /></a>
            </div>
            <div className={styles.produtos}>
               {desktopScreen
                  ?
                  produtos.map(produto => {
                     return <CardProduto admin={false} produto={produto} key={produto.id} />
                  })
                  :
                  produtos.map(produto => {
                     if (produto.id < 5) {
                        return <CardProduto admin={false} produto={produto} key={produto.id} />
                     }
                  })
               }
            </div>
         </div>
      </section>
   );
}