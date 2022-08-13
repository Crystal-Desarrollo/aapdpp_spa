import { useParams } from 'react-router-dom'

import { FullView } from '../../components/News/FullView/index'
import { useGetArticle } from '../../hooks/articles/useGetArticle'

export const FullArticle = () => {
    const { id } = useParams()
    const [article] = useGetArticle(id)

    if (!article) {
        return <h1>Not Found</h1>
    }

    return <FullView {...article} />
}
