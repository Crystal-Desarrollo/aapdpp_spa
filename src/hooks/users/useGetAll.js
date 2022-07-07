import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/usersSlice'

export const useGetAll = () => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.users)

    useEffect(() => {
        if (state.data?.length === 0) {
            dispatch(getAll())
        }
    }, [dispatch, state.data])

    return state
}
