import { useParams } from 'react-router-dom'

import { Guest } from '../layouts/Guest.jsx'
import { FullView } from '../../components/News/FullView/index.jsx'
import { useGetOne } from '../../hooks/articles/useGetOne'

export const FullArticle = () => {
    const { id } = useParams()
    const article = useGetOne(id)

    if (!article) {
        return <h1>Not Found</h1>
    }

    return (
        <Guest>
            <FullView {...article} />
        </Guest>
    )
}
