import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../store/slices/articlesSlice'

export const useGetArticle = id => {
    const dispatch = useDispatch()
    const news = useSelector(store => store.news)
    const [article, setArticle] = useState(null)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch, id])

    useEffect(() => {
        setArticle(news.data.find(x => x.id === Number(id)))
    }, [news, id])

    return article
}
