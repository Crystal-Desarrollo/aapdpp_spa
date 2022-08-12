import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { me } from '../../store/slices/authSlice'
export const useAuth = () => {
    const dispatch = useDispatch()
    const { user, token } = useSelector(store => store.auth)

    useEffect(() => {
        if (!user || !token) {
            dispatch(me())
        }
    }, []) //eslint-disable-line

    return { user }
}
