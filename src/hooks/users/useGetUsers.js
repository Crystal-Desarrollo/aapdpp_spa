import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/slices/usersSlice'

const USERS_LIMIT = 6
export const USER_TYPES = {
    all: 'all',
    members: 'member',
    admins: 'admin'
}
export const useGetUsers = (all = true, type = 'all') => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        dispatch(getAll())
    }, []) //eslint-disable-line

    useEffect(() => {
        let filteredUsers = []
        switch (type) {
            case USER_TYPES.admins:
                filteredUsers = users.filter(
                    x => x.role?.name === USER_TYPES.admins
                )
                break
            case USER_TYPES.members:
                filteredUsers = users.filter(
                    x => x.role?.name === USER_TYPES.members
                )
                break
            case USER_TYPES.all:
            default:
                filteredUsers = users
        }

        if (!all) {
            filteredUsers = filteredUsers.slice(0, USERS_LIMIT)
        }

        setSelectedUsers(filteredUsers)
    }, [all, type, users])

    return selectedUsers
}
