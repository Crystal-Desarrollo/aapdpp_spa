import moment from 'moment'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/eventsSlice'

export const useGetEvents = (future = true) => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.events)
    const [events, setEvents] = useState([])

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    useEffect(() => {
        if (future) {
            setEvents(state.filter(x => moment(x.date) >= moment()).reverse())
        } else {
            setEvents(state.filter(x => moment(x.date) < moment()))
        }
    }, [future, state])

    return events
}
