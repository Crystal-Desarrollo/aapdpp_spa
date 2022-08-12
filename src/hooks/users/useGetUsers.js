import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/usersSlice'

export const useGetUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    return users
}
