import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { FilePDF } from '../Files'

//TODO: request file
const file = ''
export const Estatuto = () => {
    return (
        <Section
            id="estatuto"
            style={{ display: 'grid', placeItems: 'center' }}
        >
            <H2>Nuestro estatuto</H2>
            <FilePDF downloadUrl={file} type="pdf" />
        </Section>
    )
}
