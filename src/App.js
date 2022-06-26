import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { Home } from './pages/guest/Home.jsx'
import { Login } from './pages/auth/Login.jsx'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ingresar" element={<Login />} />
            </Routes>
        </Router>
    )
}
