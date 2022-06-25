import { useDispatch } from 'react-redux'
import { Login } from './pages/auth/Login/index.jsx'
import { logout } from './store/slices/authSlice.js'

import { Home } from './pages/guest/Home.jsx'

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
        <Home />
    )
}
