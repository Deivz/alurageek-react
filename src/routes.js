import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao';
import AdicionarProduto from './assets/pages/AdicionarProduto';
import DescricaoProduto from './assets/pages/DescricaoProduto';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Produtos from './assets/pages/Produtos';
import BuscaContextProvider from './contexts/BuscaContext';
import ProdutosContextProvider from './contexts/ProdutosContext';
import ScreenContextProvider from './contexts/ScreenContext';

export default function AppRouter() {
    return (
        <Router>
            <ScreenContextProvider>
                <BuscaContextProvider>
                    <ProdutosContextProvider>
                        <Routes>
                            <Route path='/' element={<PaginaPadrao />}>
                                <Route index element={<Home />} />
                                <Route path='login' element={<Login />} />
                                <Route path='produtos' element={<Produtos />} />
                                <Route path='adicionar' element={<AdicionarProduto />} />
                                <Route path='/produtos/:id' element={<DescricaoProduto />} />
                            </Route>
                        </Routes>
                    </ProdutosContextProvider>
                </BuscaContextProvider>
            </ScreenContextProvider>
        </Router>
    );
}