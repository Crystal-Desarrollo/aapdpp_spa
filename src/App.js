import {
    Route,
    Routes,
    BrowserRouter as Router,
    Navigate,
    useLocation
} from 'react-router-dom'

import { Home } from './pages/guest/Home.jsx'
import { Login } from './pages/guest/Login.jsx'
import { AllNews } from './pages/member/AllNews.jsx'
import { BecomeMember } from './pages/error/BecomeMember.jsx'

import { useAuth } from './hooks/auth/useAuth.js'

function AdminMiddleware({ children }) {
    const { user, token } = useAuth()
    const location = useLocation()

    if (!user && !token) {
        return <Navigate to="/ingresar" state={{ from: location }} replace />
    }

    return children
}

function MemberMiddleware({ children }) {
    const { user, token } = useAuth()

    if (!user && !token) {
        return <BecomeMember />
    }

    return children
}

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ingresar" element={<Login />} />

                {/* <Route element={<MemberMiddleware />}> */}
                <Route path="noticias" element={<AllNews />} />
                {/* </Route> */}

                <Route element={<AdminMiddleware />}>
                    <Route path="/registrar" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}
