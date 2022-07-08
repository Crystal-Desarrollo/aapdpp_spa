import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../store/slices/usersSlice'

export const useGetOne = id => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.users)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (state.data.length === 0) {
            dispatch(getAll())
        }
    }, [dispatch, id, state.data])

    useEffect(() => {
        setUser(state.data.find(x => x.id === Number(id)))
    }, [state, id])

    return user
}
