import { Box } from '../../Common/Box'
import { H3, H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { PaymentInformationStyled } from './styles'

export const PaymentInformation = () => {
    return (
        <PaymentInformationStyled>
            <H2>Membresia</H2>
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
                Activa
            </Box>
        </PaymentInformationStyled>
    )
}
