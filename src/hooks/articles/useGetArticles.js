import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/articlesSlice'

const ARTICLES_LIMIT = 6
export const useGetArticles = allArticles => {
    const dispatch = useDispatch()
    const articles = useSelector(store => store.news)
    const [news, setNews] = useState([])

    useEffect(() => {
        dispatch(getAll())
    }, []) // eslint-disable-line

    useEffect(() => {
        if (!allArticles) {
            setNews(articles.slice(0, ARTICLES_LIMIT))
            return
        }

        setNews(articles)
    }, [articles, allArticles])

    return news
}
