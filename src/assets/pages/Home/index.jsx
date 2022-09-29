// import styles from './home.module.css';
import Banner from '../../components/Banner/index';
import Secao from '../../components/Secao';
// import { consoleProdutos, swProdutos } from '../../utils/produtos.js';

export default function Home(){

    // const PRODUTOS = {
    //     swProdutos: swProdutos,
    //     consoleProdutos: consoleProdutos
    // };

    return(
        <>
            <Banner />
            <Secao />
        </>
    );
}