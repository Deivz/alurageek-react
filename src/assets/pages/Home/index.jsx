// import styles from './home.module.css';
import Banner from '../../components/Banner/index';
import Secao from '../../components/Secao';
import { produtos } from '../../utils/produtos.js';

export default function Home() {
    return (
        <>
            <Banner />
            {
                produtos.map(produto => {
                    return <Secao titulo={produto.titulo} produtos={produto.produtos} key={produto.id} />
                })
            }
        </>
    );
}