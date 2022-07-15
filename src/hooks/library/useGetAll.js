import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/librarySlice'

export const useGetAll = () => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.library)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return state
}
