import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/linksSlice'

const LINKS_LIMIT = 8
export const useGetLinks = (all = true) => {
    const dispatch = useDispatch()
    const links = useSelector(store => store.links)
    const [requestedArticles, setRequestedArticles] = useState([])

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    useEffect(() => {
        if (!all) {
            setRequestedArticles(links.slice(0, LINKS_LIMIT))
            return
        }

        setRequestedArticles(links)
    }, [all, links])

    return requestedArticles
}
