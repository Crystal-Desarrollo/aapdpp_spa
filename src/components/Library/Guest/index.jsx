import { Hero } from '../../Hero'
import { LibrarySection } from './Section'
import HeroImage from '../../../asssets/img/hero_event.webp'
import { useGetLibrary } from '../../../hooks/library/useGetLibrary'
import { NoContent } from '../../Common/NoContent'

export const DocumentList = () => {
    const folders = useGetLibrary()

    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="imagen ilustrativa de una biblioteca"
                text="Biblioteca"
            />

            {folders.length > 0 ? (
                folders.map(folder => (
                    <LibrarySection key={folder.id} folder={folder} />
                ))
            ) : (
                <NoContent />
            )}
        </>
    )
}
