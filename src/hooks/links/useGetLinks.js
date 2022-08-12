import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/linksSlice'

export const useGetLinks = () => {
    const dispatch = useDispatch()
    const links = useSelector(store => store.links)

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    return links
}
