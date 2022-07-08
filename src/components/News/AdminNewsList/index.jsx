import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../../Loader'

import { useGetAll } from '../../../hooks/articles/useGetAll'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/articlesSlice'

export const ArticlesList = () => {
    const dispatch = useDispatch()
    const { loading, data = [] } = useGetAll(true)

    const handleDelete = id => {
        dispatch(remove(id))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/noticias/agregar">
                    Agregar noticia
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {loading && <Loader />}

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.description}</td>
                                <td>
                                    <Link to={`/admin/noticias/${article.id}`}>
                                        <FaPen />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(article.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </MembersListStyled>
        </Section>
    )
}
