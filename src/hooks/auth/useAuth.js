import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { me } from '../../store/slices/authSlice'
export const useAuth = () => {
    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth)

    useEffect(() => {
        if (!auth.user) {
            dispatch(me())
        }
    }, [dispatch, auth])

    return auth
}
