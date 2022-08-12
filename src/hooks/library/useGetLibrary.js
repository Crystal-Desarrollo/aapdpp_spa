import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/librarySlice'

export const useGetLibrary = () => {
    const dispatch = useDispatch()
    const library = useSelector(store => store.library)

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    return library
}
