import { HeaderStyled } from './styles'
import { Menu } from './Menu/index.jsx'

import Logo from '../../asssets/img/logo_apdp.jpg'

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

                <Menu />
            </div>
        </HeaderStyled>
    )
}
