import { ProfileForm } from '../../components/Profile/ProfileForm'
import { PaymentInformation } from '../../components/Profile/PaymentInformation'
import { useParams } from 'react-router-dom'
import { useGetUser } from '../../hooks/users/useGetUser'
export const Profile = () => {
    const { id } = useParams()
    const user = useGetUser(id)

    return (
        <>
            <ProfileForm user={user} />
            <PaymentInformation user={user} />
        </>
    )
}
