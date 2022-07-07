import {
    Route,
    Routes,
    BrowserRouter as Router,
    Navigate,
    useLocation
} from 'react-router-dom'

import { Guest } from './pages/layouts/Guest.jsx'
import { Home } from './pages/guest/Home.jsx'
import { Login } from './pages/guest/Login.jsx'
import { AllNews } from './pages/member/AllNews.jsx'
import { FullArticle } from './pages/guest/FullArticle.jsx'
import { BecomeMember } from './pages/error/BecomeMember.jsx'
import { Profile } from './pages/member/Profile.jsx'
import { Dashboard } from './pages/admin/Dashboard.jsx'
import { AddArticle } from './pages/admin/Articles/AddArticle.jsx'
import { Articles } from './pages/admin/Articles/Articles.jsx'

import { useAuth } from './hooks/auth/useAuth.js'

function AdminMiddleware({ children }) {
    const { user } = useAuth()
    const location = useLocation()

    if (user?.role?.name !== 'admin') {
        return <Navigate to="/ingresar" state={{ from: location }} replace />
    }

    return children
}

function MemberMiddleware({ children }) {
    const auth = useAuth()

    if (!auth.user || !auth.token) {
        return <BecomeMember />
    }

    return children
}

function GuestMiddleWare({ children }) {
    const auth = useAuth()

    if (auth.user || auth.token) {
        return <Navigate to="/" replace />
    }

    return children
}

export function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Guest />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/ingresar"
                        element={
                            <GuestMiddleWare>
                                <Login />
                            </GuestMiddleWare>
                        }
                    />

                    {/* Member only routes */}

                    <Route
                        path="/noticias/:id"
                        element={
                            <MemberMiddleware>
                                <FullArticle />
                            </MemberMiddleware>
                        }
                    />
                    <Route
                        path="/noticias"
                        element={
                            <MemberMiddleware>
                                <AllNews />
                            </MemberMiddleware>
                        }
                    />
                    <Route
                        path="/perfil"
                        element={
                            <MemberMiddleware>
                                <Profile />
                            </MemberMiddleware>
                        }
                    />

                    <Route
                        path="/registrar"
                        element={
                            <AdminMiddleware>
                                <h1>Registro de usuarios</h1>
                            </AdminMiddleware>
                        }
                    />

                    <Route path="/admin">
                        <Route
                            path="/admin/panel-general"
                            element={
                                <AdminMiddleware>
                                    <Dashboard />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/noticias"
                            element={
                                <AdminMiddleware>
                                    <Articles />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/agregar-noticia"
                            element={
                                <AdminMiddleware>
                                    <AddArticle />
                                </AdminMiddleware>
                            }
                        />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}
