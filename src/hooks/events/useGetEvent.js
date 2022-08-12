import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getOne } from '../../store/slices/eventsSlice'

export const useGetEvent = id => {
    const dispatch = useDispatch()
    const [event, setEvent] = useState({})

    useEffect(() => {
        if (id) {
            dispatch(getOne(id)).then(data => setEvent(data))
        }
    }, [id]) // eslint-disable-line

    return [event, setEvent]
}
