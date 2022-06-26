import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/articlesSlice'

export const useGetAll = () => {
    const dispatch = useDispatch()
    const news = useSelector(store => store.news)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return news
}
