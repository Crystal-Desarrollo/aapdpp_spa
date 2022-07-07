import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { me } from '../../store/slices/authSlice'
export const useAuth = () => {
    const dispatch = useDispatch()
    const { data, loading } = useSelector(store => store.auth)

    useEffect(() => {
        if (!data.user || !data.token) {
            dispatch(me())
        }
    }, [dispatch, data])

    return { data, loading }
}
