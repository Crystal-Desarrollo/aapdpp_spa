import { useDispatch } from 'react-redux'
import { Header } from './components/Header/index.jsx'
import { Hero } from './components/Hero/index.jsx'
import { About } from './components/About/index.jsx'
import { News } from './components/News/index.jsx'
import { Links } from './components/Links/index.jsx'
import { Contact } from './components/Contact/index.jsx'
import { Login } from './pages/auth/Login/index.jsx'
import { logout } from './store/slices/authSlice.js'

export function App() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        // <div>
        //     <Login />
        //     <button onClick={handleLogout}>Cerrar sesion</button>
        // </div>
        <>
            <Header />
            <Hero />
            <About />
            <News />
            <Links />
            <Contact />
        </>
    )
}
