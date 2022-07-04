import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index.jsx'
export const Guest = () => {
    return (
        <>
            <Header />
            <main>{<Outlet />}</main>
        </>
    )
}
