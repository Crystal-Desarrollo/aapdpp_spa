import { HeaderStyled } from './styles'
import { Menu } from './Menu/index.jsx'

import Logo from '../../asssets/img/logo_apdp.jpg'

const headerLinks = [
    {
        text: 'Inicio',
        url: '/'
    },
    {
        text: 'Nosotros',
        url: '/nosotros'
    },
    {
        text: 'Noticias',
        url: '/noticias'
    },
    {
        text: 'Enlaces de interés',
        url: '/enlaces-de-interes'
    },
    {
        text: 'Contacto',
        url: '/contacto'
    },
    {
        text: 'Ingresar',
        url: '/ingresar'
    }
]

export function Header() {
    return (
        <HeaderStyled>
            <div className="content">
                <div>
                    <img
                        src={Logo}
                        alt="Logo Asociación Argentina de Profesores de Derecho Procesal Penal"
                    />
                    <h1>AAPDPP</h1>
                </div>

                <Menu items={headerLinks} />
            </div>
        </HeaderStyled>
    )
}
