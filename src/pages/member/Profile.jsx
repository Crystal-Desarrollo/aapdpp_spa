import { ProfileForm } from '../../components/Profile/ProfileForm'
import { PaymentInformation } from '../../components/Profile/PaymentInformation'
import { useParams } from 'react-router-dom'
import { useGetUser } from '../../hooks/users/useGetUser'
import { Loader } from '../../components/Loader'
import { useIsLoading } from '../../hooks/app/useIsLoading'

export const Profile = () => {
    const { id } = useParams()
    const user = useGetUser(id)
    const isLoading = useIsLoading()

    return (
        <>
            {isLoading && <Loader />}
            <ProfileForm user={user} />
            <PaymentInformation user={user} />
        </>
    )
}
