import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { FileCard, TYPES } from '../Files'

//TODO: request file
export const Estatuto = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/assets/estatuto.pdf`

    return (
        <Section
            id="estatuto"
            style={{ display: 'grid', placeItems: 'center' }}
        >
            <H2>Nuestro estatuto</H2>
            <FileCard downloadUrl={fileUrl} type={TYPES.pdf} />
        </Section>
    )
}
