import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index.jsx'
import { useAuth } from '../../hooks/auth/useAuth.js'
import { Loader } from '../../components/Loader/index.jsx'
export const Guest = () => {
    const { loading } = useAuth()

    return (
        <>
            <Header />
            <main style={{ padding: '1rem' }}>
                {loading ? <Loader /> : <Outlet />}
            </main>
        </>
    )
}
