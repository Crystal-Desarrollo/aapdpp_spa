import ReactQuill from 'react-quill'
import styled from 'styled-components'

const EditorStyled = styled.div`
    label {
        font-size: 1rem;
        font-weight: 500;
        color: #1d3557;
        background-color: inherit;
    }

    .quill {
        margin-top: 0.5rem;
        border: 1px solid #1d3557;
    }

    .ql-editor {
        min-height: 200px;
    }

    .ql-toolbar {
        border-bottom: 1px solid #1d3557;
    }
`

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],
        ['link', 'image'],
        ['clean']
    ]
}

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
]
export const TextEditor = props => {
    const { value, name, onChange, labelText } = props

    const handleChange = content => {
        onChange &&
            typeof onChange === 'function' &&
            onChange({
                target: {
                    name,
                    value: content
                }
            })
    }

    return (
        <EditorStyled>
            <label htmlFor="">{labelText}</label>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                style={{ minHeight: '200px' }}
            />
        </EditorStyled>
    )
}
