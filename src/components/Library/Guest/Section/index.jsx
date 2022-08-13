import { Grid } from '../../../Common/Grid'
import { Section } from '../../../Common/Section'
import { H2 } from '../../../Common/Texts'
import { FileCard, TYPES } from '../../../Files'

export const LibrarySection = ({ titleSection, documents }) => {
    const numberDocuments = 0
    const fileUrl = `${process.env.PUBLIC_URL}/assets/estatuto.pdf`

    return (
        <Section>
            <H2>{`${titleSection} (${numberDocuments})`}</H2>
            <Grid>
                <FileCard downloadUrl={fileUrl} type={TYPES.pdf} />
                <FileCard downloadUrl={fileUrl} type={TYPES.pdf} />
                <FileCard downloadUrl={fileUrl} type={TYPES.pdf} />
                <FileCard downloadUrl={fileUrl} type={TYPES.pdf} />
            </Grid>
        </Section>
    )
}
