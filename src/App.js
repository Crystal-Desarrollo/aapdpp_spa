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
import { Register } from './pages/admin/Users/Register.jsx'
import { UsersList } from './pages/admin/Users/List.jsx'
import { LinksList } from './pages/admin/Links/LinksList.jsx'
import { AddLink } from './pages/admin/Links/AddLink.jsx'
import { FileList } from './pages/admin/Library/FilesList.jsx'

import { useAuth } from './hooks/auth/useAuth.js'
import { Events } from './pages/guest/Events.jsx'

function AdminMiddleware({ children }) {
    const {
        data: { user }
    } = useAuth()
    const location = useLocation()

    if (user?.role?.name !== 'admin') {
        return <Navigate to="/ingresar" state={{ from: location }} replace />
    }

    return children
}

function MemberMiddleware({ children }) {
    const {
        data: { user }
    } = useAuth()
    const userRole = user?.role?.name

    if (userRole === 'admin' || userRole === 'member') {
        return children
    }

    return <BecomeMember />
}

function GuestMiddleWare({ children }) {
    const { data: auth } = useAuth()

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

                    <Route path="/eventos" element={<Events />} />

                    <Route
                        path="/miembros/:id"
                        element={
                            <MemberMiddleware>
                                <Profile />
                            </MemberMiddleware>
                        }
                    />

                    <Route path="/admin">
                        <Route
                            path="/admin/biblioteca"
                            element={
                                <AdminMiddleware>
                                    <FileList />
                                </AdminMiddleware>
                            }
                        />

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
                            path="/admin/noticias/agregar"
                            element={
                                <AdminMiddleware>
                                    <AddArticle />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/enlaces"
                            element={
                                <AdminMiddleware>
                                    <LinksList />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/enlaces/agregar"
                            element={
                                <AdminMiddleware>
                                    <AddLink />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/miembros"
                            element={
                                <AdminMiddleware>
                                    <UsersList />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/miembros/agregar"
                            element={
                                <AdminMiddleware>
                                    <Register />
                                </AdminMiddleware>
                            }
                        />

                        <Route
                            path="/admin/miembros/:id"
                            element={
                                <AdminMiddleware>
                                    <Profile />
                                </AdminMiddleware>
                            }
                        />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}
