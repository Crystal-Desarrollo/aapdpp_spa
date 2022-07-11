import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { MainActionsStyled, LinksListStyled } from './styles'
import { Link } from 'react-router-dom'
import { Loader } from '../../Loader'
import { useGetAll } from '../../../hooks/links/useGetAll'
import { useDispatch } from 'react-redux'
import { FaTrash, FaGlobe } from 'react-icons/fa'
import { remove } from '../../../store/slices/linksSlice'

function mapIcons(iconName) {
    const dictionary = [
        {
            name: 'fas fa-globe',
            icon: FaGlobe
        }
    ]

    const Icon = dictionary.find(x => x.name === iconName)?.icon

    return Icon ? <Icon /> : <FaGlobe />
}

export const AdminLinkList = () => {
    const dispatch = useDispatch()
    const { loading, data } = useGetAll()

    const handleDelete = id => {
        dispatch(remove(id))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/enlaces/agregar">
                    Agregar enlace
                </Button>
            </MainActionsStyled>

            <LinksListStyled>
                {loading && <Loader />}

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Icono</th>
                            <th>Texto Visible</th>
                            <th>Enlace</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(link => (
                            <tr key={link.id}>
                                <td>{link.id}</td>
                                <td>{mapIcons(link.icon)}</td>
                                <td>{link.visible_text}</td>
                                <td>{link.url}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(link.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LinksListStyled>
        </Section>
    )
}
