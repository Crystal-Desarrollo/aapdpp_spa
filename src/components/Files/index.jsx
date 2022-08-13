import { FileCardStyled } from './styles'
import { FaFileAlt } from 'react-icons/fa'
import { FileExcel, FilePDF, FilePP, FileWord } from '../../asssets/img/images'

export const TYPES = {
    excel: 'xlsx',
    word: 'docx',
    powerpoint: 'pptx',
    pdf: 'pdf',
    generic: 'generic'
}
export const FileCard = ({ type, downloadUrl }) => {
    return (
        <FileCardStyled type={type} to={downloadUrl}>
            {type === TYPES.pdf && <FilePDF />}

            {type === TYPES.word && <FileWord />}

            {type === TYPES.powerpoint && <FilePP />}

            {type === TYPES.excel && <FileExcel />}

            {type === TYPES.generic && (
                <i>
                    <FaFileAlt />
                </i>
            )}

            <p>Descargar</p>
        </FileCardStyled>
    )
}
