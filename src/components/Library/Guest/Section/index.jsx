import { useState } from 'react'
import { getFileExtension } from '../../../../utils/files'
import { Button } from '../../../Common/Inputs/Button'
import { Section } from '../../../Common/Section'
import { H2 } from '../../../Common/Texts'
import { FileCard, mapExtensionToType } from '../../../Files'
import { LibraryTittle, NewGrid } from './styles'

export const LibrarySection = ({ folder }) => {
    const [height, setHeight] = useState('auto')

    const toggleHeight = () => {
        height === '0px' ? setHeight('auto') : setHeight('0px')
    }

    return (
        <Section>
            <LibraryTittle>
                <H2>{`${folder.name} (${folder.files?.length || 0})`}</H2>
                <Button onClick={() => toggleHeight()}>Contraer</Button>
            </LibraryTittle>
            <hr />
            <NewGrid height={height}>
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
            </NewGrid>
        </Section>
    )
}
