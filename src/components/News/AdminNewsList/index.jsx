import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../../Loader'

import { useGetArticles } from '../../../hooks/articles/useGetArticles'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/articlesSlice'
import { useIsLoading } from '../../../hooks/app/useIsLoading'
import { toast } from 'react-toastify'
import { ARTICLE_DELETED } from '../../../i18n/articles'

export const ArticlesList = () => {
    const dispatch = useDispatch()
    const news = useGetArticles(true)
    const isLoading = useIsLoading()

    const handleDelete = id => {
        dispatch(remove(id)).then(() => toast.success(ARTICLE_DELETED))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/noticias/agregar">
                    Agregar noticia
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {isLoading && <Loader />}

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
                        {news?.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.description}</td>
                                <td>
                                    <Link
                                        to={`/admin/noticias/agregar/${article.id}`}
                                    >
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
