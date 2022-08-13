import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index.jsx'
import { Loader } from '../../components/Loader/index.jsx'
import { useIsLoading } from '../../hooks/app/useIsLoading.js'
export const Guest = () => {
    const isLoading = useIsLoading()

    return (
        <>
            <Header />
            <main>
                {isLoading && <Loader />}
                <Outlet />
            </main>
        </>
    )
}
