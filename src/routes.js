import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao';
import Home from './assets/pages/Home';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    {/* <Route path='cadastro' element={<Cadastro />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}