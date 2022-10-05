import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao';
import AdicionarProduto from './assets/pages/AdicionarProduto';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Produtos from './assets/pages/Produtos';
import ScreenContextProvider from './contexts/ScreenContext';

export default function AppRouter() {
    return (
        <Router>
            <ScreenContextProvider>
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='produtos' element={<Produtos />} />
                        <Route path='adicionar' element={<AdicionarProduto />} />
                    </Route>
                </Routes>
            </ScreenContextProvider>
        </Router>
    );
}