import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/articlesSlice'

export const useGetAll = full => {
    const dispatch = useDispatch()
    const { loading, data } = useSelector(store => store.news)
    const [news, setNews] = useState({})

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    useEffect(() => {
        if (!full && data.length > 6) {
            setNews({
                data: data.slice(0, 6),
                loading
            })
        } else {
            setNews({ loading, data })
        }
    }, [data, loading, full])

    return news
}
