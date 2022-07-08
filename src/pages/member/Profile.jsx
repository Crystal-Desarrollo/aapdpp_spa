import { ProfileForm } from '../../components/Profile/ProfileForm'
import { PaymentInformation } from '../../components/Profile/PaymentInformation'
import { useParams } from 'react-router-dom'

export const Profile = () => {
    const { id } = useParams()

    return (
        <>
            <ProfileForm userId={id} />
            <PaymentInformation />
        </>
    )
}
