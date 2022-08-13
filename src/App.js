import {
    Route,
    Routes,
    BrowserRouter as Router,
    Navigate,
    Outlet
} from 'react-router-dom'
import { Guest } from './pages/layouts/Guest.jsx'
import { Home } from './pages/guest/Home.jsx'
import { Login } from './pages/guest/Login.jsx'
import { AllNews } from './pages/member/AllNews.jsx'
import { FullArticle } from './pages/guest/FullArticle.jsx'
import { BecomeMember } from './pages/error/BecomeMember.jsx'
import { Profile } from './pages/member/Profile.jsx'
import { AddArticle } from './pages/admin/Articles/AddArticle.jsx'
import { Articles } from './pages/admin/Articles/Articles.jsx'
import { Register } from './pages/admin/Users/Register.jsx'
import { UsersList } from './pages/admin/Users/List.jsx'
import { LinksList } from './pages/admin/Links/LinksList.jsx'
import { AddLink } from './pages/admin/Links/AddLink.jsx'
import { FileList } from './pages/admin/Library/FilesList.jsx'
import { Events as AdminEvents } from './pages/admin/Events/Events'
import { AddEvent } from './pages/admin/Events/AddEvent.jsx'
import { Events } from './pages/guest/Events.jsx'
import { NotFound } from './pages/error/NotFound.jsx'
import { Library } from './pages/guest/Library.jsx'

import { useAuth } from './hooks/auth/useAuth.js'
import { EventInfo } from './components/Events/EventInfo/index.jsx'

function AdminMiddleware() {
    const user = useAuth()
    const userRole = user?.role?.name

    if (userRole === 'admin') {
        return <Outlet />
    }

    return <Login />
}

function MemberMiddleware() {
    const user = useAuth()
    const userRole = user?.role?.name

    if (userRole === 'admin' || userRole === 'member') {
        return <Outlet />
    }

    return <BecomeMember />
}

function GuestMiddleWare({ children }) {
    const user = useAuth()

    if (user) {
        return <Navigate to="/" replace />
    }

    return children
}

export function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Guest />}>
                    <Route
                        path="/ingresar"
                        element={
                            <GuestMiddleWare>
                                <Login />
                            </GuestMiddleWare>
                        }
                    />

                    <Route path="/" element={<Home />} />
                    <Route path="/biblioteca" element={<Library />} />
                    <Route path="/eventos" element={<Events />} />
                    <Route path="/eventos/:id" element={<EventInfo />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />

                    {/* Member only routes */}

                    <Route path="" element={<MemberMiddleware />}>
                        <Route path="/noticias/:id" element={<FullArticle />} />
                        <Route path="/noticias" element={<AllNews />} />
                        <Route path="/miembros/:id" element={<Profile />} />
                    </Route>

                    <Route path="" element={<AdminMiddleware />}>
                        <Route path="/admin">
                            <Route
                                path="/admin/biblioteca"
                                element={<FileList />}
                            />

                            <Route
                                path="/admin/noticias"
                                element={<Articles />}
                            />

                            <Route
                                path="/admin/noticias/agregar"
                                element={<AddArticle />}
                            />

                            <Route
                                path="/admin/noticias/agregar/:id"
                                element={<AddArticle />}
                            />

                            <Route
                                path="/admin/eventos"
                                element={<AdminEvents />}
                            />

                            <Route
                                path="/admin/eventos/agregar/"
                                element={<AddEvent />}
                            />

                            <Route
                                path="/admin/eventos/agregar/:id"
                                element={<AddEvent />}
                            />

                            <Route
                                path="/admin/enlaces"
                                element={<LinksList />}
                            />

                            <Route
                                path="/admin/enlaces/agregar"
                                element={<AddLink />}
                            />

                            <Route
                                path="/admin/miembros"
                                element={<UsersList />}
                            />

                            <Route
                                path="/admin/miembros/agregar"
                                element={<Register />}
                            />

                            <Route
                                path="/admin/miembros/:id"
                                element={<Profile />}
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}
