import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/eventsSlice'

export const useGetEvents = () => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.events)

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    return state
}
