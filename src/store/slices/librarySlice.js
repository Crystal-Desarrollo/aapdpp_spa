import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import FilesApi from '../../api/filesApi'
import FoldersApi from '../../api/foldersApi'

const filesSlice = createSlice({
    name: 'files',
    initialState: {
        loading: false,
        data: []
    },
    reducers: {
        setLoadingAction: (state, action) => {
            state.loading = action.payload
        },
        getAllAction: (state, action) => {
            state.data = action.payload
        },
        deleteFileAction: (state, action) => {
            const folderIndex = state.data.findIndex(
                x => x.id === action.payload.folderId
            )
            const fileIndex = state.data[folderIndex].files?.findIndex(
                x => x.id === action.payload.fileId
            )
            state.data[folderIndex].files?.splice(fileIndex, 1)
        },
        createFileAction: (state, action) => {
            const files = action.payload
            const folderIndex = state.data.findIndex(
                x => x.id === files[0].fileable.id
            )

            const currentFolder = state.data[folderIndex]
            state.data[folderIndex] = {
                ...currentFolder,
                files: [...currentFolder.files, ...files]
            }
        },
        deleteFolderAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.data.splice(index, 1)
        },
        createFolderAction: (state, action) => {
            state.data.push(action.payload)
        },
        updateFolderAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.data.splice(index, 1, action.payload)
        }
    }
})
export default filesSlice.reducer

const {
    setLoadingAction,
    deleteFileAction,
    createFileAction,
    getAllAction,
    deleteFolderAction,
    createFolderAction,
    updateFolderAction
} = filesSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FoldersApi.getAll()
        if (response.status === 200) {
            dispatch(getAllAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
    } finally {
        dispatch(setLoadingAction(false))
    }
}
export const removeFile = (fileId, folderId) => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FilesApi.delete(fileId)
        if (response.status === 204) {
            dispatch(deleteFileAction({ fileId, folderId }))
            toast.success('Archivo eliminado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const createFile = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FilesApi.create(data)
        if (response.status === 201) {
            dispatch(createFileAction(response.data))
            toast.success('Archivo agregado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const removeFolder = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FoldersApi.delete(id)
        if (response.status === 204) {
            dispatch(deleteFolderAction(id))
            toast.success('Carpeta eliminada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const createFolder = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FoldersApi.create(data)
        if (response.status === 201) {
            dispatch(createFolderAction(response.data))
            toast.success('Carpeta creada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const updateFolder = (data, id) => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await FoldersApi.update(data, id)
        if (response.status === 200) {
            dispatch(updateFolderAction(response.data))
            toast.success('Carpeta actualizada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
