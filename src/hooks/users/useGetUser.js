import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { USER_NOT_FOUND } from '../../i18n/users'
import { getOne } from '../../store/slices/usersSlice'

export const useGetUser = id => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (id) {
            dispatch(getOne(id))
                .then(data => setUser(data))
                .catch(() => toast.error(USER_NOT_FOUND))
        }
    }, [id]) //eslint-disable-line

    return user
}
