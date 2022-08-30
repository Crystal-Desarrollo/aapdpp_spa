import { Box } from '../../Common/Box'
import { H3, H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { PaymentInformationStyled } from './styles'
import { useAuth } from '../../../hooks/auth/useAuth'
import { Switch } from '../../Common/Inputs/Switch'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateStatus } from '../../../store/slices/usersSlice'
import { toast } from 'react-toastify'
import {
    MEMBERSHIP_ACTIVATED,
    MEMBERSHIP_DEACTIVATED
} from '../../../i18n/users'
import { Section } from '../../Common/Section'

const mapActiveText = isActive => {
    return isActive ? 'Activa' : 'Inactiva'
}

export const PaymentInformation = ({ user }) => {
    const dispatch = useDispatch()
    const loggedUser = useAuth()
    const [activeStatus, setActiveStatus] = useState(false)

    const isAdmin = loggedUser?.role?.name === 'admin'
    const isAdminProfile = user?.role?.name === 'admin'

    useEffect(() => {
        setActiveStatus(user?.active)
    }, [user])

    const handleToggleSubscription = e => {
        const newStatus = !activeStatus
        setActiveStatus(newStatus)
        dispatch(updateStatus(user.id, { active: newStatus })).then(() => {
            if (newStatus) {
                toast.success(MEMBERSHIP_ACTIVATED)
            } else {
                toast.success(MEMBERSHIP_DEACTIVATED)
            }
        })
    }

    return (
        <Section>
            <H2>Membresia</H2>
            <PaymentInformationStyled>
                <Box>
                    <H3>Datos de pago</H3>
                    <TextField
                        disabled
                        labelText="CBU"
                        value="0720033520000001077636"
                    />
                    <TextField
                        disabled
                        labelText="ALIAS"
                        value="PROFES.DPP.ARGENTINA"
                    />
                    <TextField
                        disabled
                        labelText="Razón Social"
                        value="ASOCIACION AR DE PR D DER P P"
                    />
                    <TextField
                        disabled
                        labelText="CUIT/CUIL"
                        value="30-71151496-8"
                    />
                </Box>
                <Box>
                    <H3>Estado</H3>
                    {isAdmin ? (
                        <Switch
                            value={activeStatus || ''}
                            onChange={handleToggleSubscription}
                            labelText={mapActiveText(activeStatus)}
                            disabled={isAdminProfile}
                        />
                    ) : (
                        mapActiveText(activeStatus)
                    )}
                </Box>
            </PaymentInformationStyled>
        </Section>
    )
}
