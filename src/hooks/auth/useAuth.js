import { useSelector } from 'react-redux'
export const useAuth = () => {
    const auth = useSelector(store => store.auth)

    return auth
}
