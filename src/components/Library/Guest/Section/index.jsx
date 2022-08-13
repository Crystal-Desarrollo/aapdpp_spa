import { getFileExtension } from '../../../../utils/files'
import { Grid } from '../../../Common/Grid'
import { Section } from '../../../Common/Section'
import { H2 } from '../../../Common/Texts'
import { FileCard, mapExtensionToType } from '../../../Files'

export const LibrarySection = ({ folder }) => {
    return (
        <Section>
            <H2>{`${folder.name} (${folder.files?.length || 0})`}</H2>
            <Grid>
                {folder.files?.length > 0 &&
                    folder.files.map(file => (
                        <FileCard
                            key={file.id}
                            downloadUrl={file.path}
                            type={mapExtensionToType(
                                getFileExtension(file.original_name)
                            )}
                            downloadName={file.original_name}
                        />
                    ))}
            </Grid>
        </Section>
    )
}
