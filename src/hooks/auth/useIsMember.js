import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const useIsMember = () => {
    const { data } = useSelector(store => store.auth)
    const [isMember, setIsMember] = useState(false)

    useEffect(() => {
        const userRole = data.user?.role?.name
        setIsMember(userRole === 'member')
    }, [data])

    return isMember
}
