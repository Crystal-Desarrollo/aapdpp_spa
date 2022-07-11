import { ProfileForm } from '../../components/Profile/ProfileForm'
import { PaymentInformation } from '../../components/Profile/PaymentInformation'
import { useParams } from 'react-router-dom'
import { useGetOne } from '../../hooks/users/useGetOne'
import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'

export const Profile = () => {
    const { id } = useParams()
    const user = useGetOne(id)
    const loading = useSelector(store => store.users.loading)

    return (
        <>
            {loading && <Loader />}
            <ProfileForm user={user} />
            <PaymentInformation user={user} />
        </>
    )
}
