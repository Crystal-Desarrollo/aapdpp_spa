import { Hero } from '../../Hero'
import { LibrarySection } from './Section'

import HeroImage from '../../../asssets/img/hero_event.webp'

export const DocumentList = () => {
    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="imagen ilustrativa de una biblioteca"
                text="Biblioteca"
            />
            <LibrarySection titleSection="Documentos de interes" />

            <LibrarySection titleSection="Derecho Civil" />
        </>
    )
}
