import { Guest } from '../layouts/Guest.jsx'
import { News } from '../../components/News/NewsList/index.jsx'

export const AllNews = () => {
    return (
        <Guest>
            <News title="Todas las noticias" full={true} />
        </Guest>
    )
}
