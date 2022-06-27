import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/articlesSlice'

export const useGetAll = full => {
    const dispatch = useDispatch()
    const news = useSelector(store => store.news)
    const [displayableNews, setDisplayableNews] = useState([])

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    useEffect(() => {
        if (!full && news.length > 6) {
            setDisplayableNews(news.slice(0, 6))
        } else {
            setDisplayableNews(news)
        }
    }, [news, full])

    return displayableNews
}
