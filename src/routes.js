import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './assets/components/PaginaPadrao';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}