// import styles from './home.module.css';
import Banner from '../../components/Banner/index';
import Secao from '../../components/Secao';
import { produtos } from '../../utils/produtos.js';

export default function Home() {
    return (
        <>
            <Banner />
            {
                produtos.map(categoria => {
                    return <Secao titulo={categoria.titulo} produtos={categoria.produtos} key={categoria.id} />
                })
            }
        </>
    );
}