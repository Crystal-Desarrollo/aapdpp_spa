import { FileCardStyled, ImageCardStyled } from './styles'
import { FaFileAlt } from 'react-icons/fa'
import { FileExcel, FilePDF, FilePP, FileWord } from '../../asssets/img/images'

export const TYPES = {
    excel: 'xlsx',
    word: 'docx',
    powerpoint: 'pptx',
    pdf: 'pdf',
    generic: 'generic',
    image: 'img'
}

export const mapExtensionToType = ext => {
    switch (ext) {
        case 'xls':
        case 'xlsx':
        case 'csv':
            return TYPES.excel
        case 'doc':
        case 'docx':
        case 'txt':
            return TYPES.word
        case 'ppt':
        case 'pptx':
            return TYPES.word
        case 'pdf':
            return TYPES.word
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'webp':
            return TYPES.image
        default:
            return TYPES.generic
    }
}

export const FileCard = ({ type, downloadUrl, downloadName }) => {
    //TODO: esta funcion deberia permitir que los archivos se descarguen con el nombre "lindo" pero no funciona aun por algo de la api
    // const downloadFile = e => {
    //     e.preventDefault()
    //     fetch(downloadUrl)
    //         .then(res => res.blob())
    //         .then(blob => {
    //             const url = window.URL.createObjectURL(blob)
    //             const a = document.createElement('a')
    //             a.style.display = 'none'
    //             a.href = url
    //             a.download = downloadName
    //             document.body.appendChild(a)
    //             a.click()
    //             window.URL.revokeObjectURL(url)
    //         })
    //         .catch(() => toast.error(SOMETHING_WENT_WRONG))
    // }

    if (type === TYPES.image) {
        return (
            <ImageCardStyled href={downloadUrl} target="_blank" loading="lazy">
                <img src={downloadUrl} alt={downloadName} />
            </ImageCardStyled>
        )
    }

    return (
        <FileCardStyled type={type} href={downloadUrl} download loading="lazy">
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
