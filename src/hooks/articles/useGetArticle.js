import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getOne } from '../../store/slices/articlesSlice'

export const useGetArticle = id => {
    const dispatch = useDispatch()
    const [article, setArticle] = useState({})

    useEffect(() => {
        if (id) {
            dispatch(getOne(id)).then(data => setArticle(data))
        }
    }, [id]) //eslint-disable-line

    return [article, setArticle]
}
