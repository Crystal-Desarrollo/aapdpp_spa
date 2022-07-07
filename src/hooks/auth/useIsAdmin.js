import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const useIsAdmin = () => {
    const { data } = useSelector(store => store.auth)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const userRole = data.user?.role?.name
        setIsAdmin(userRole === 'admin')
    }, [data])

    return isAdmin
}
