import { createSlice } from '@reduxjs/toolkit'
import FilesApi from '../../api/filesApi'
import FoldersApi from '../../api/foldersApi'
import { setLoading } from './appSlice'
import { SOMETHING_WENT_WRONG } from '../../i18n/common'

const filesSlice = createSlice({
    name: 'files',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        },
        deleteFileAction: (state, action) => {
            const folderIndex = state.findIndex(
                x => x.id === action.payload.folderId
            )
            const fileIndex = state[folderIndex].files?.findIndex(
                x => x.id === action.payload.fileId
            )
            state[folderIndex].files?.splice(fileIndex, 1)
        },
        createFileAction: (state, action) => {
            const files = action.payload
            const folderIndex = state.findIndex(
                x => x.id === files[0].fileable.id
            )
            const currentFolder = state[folderIndex]
            state[folderIndex] = {
                ...currentFolder,
                files: [...currentFolder.files, ...files]
            }
        },
        deleteFolderAction: (state, action) => {
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.splice(index, 1)
        },
        createFolderAction: (state, action) => {
            state.push(action.payload)
        },
        updateFolderAction: (state, action) => {
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.splice(index, 1, action.payload)
        }
    }
})
export default filesSlice.reducer

const {
    deleteFileAction,
    createFileAction,
    getAllAction,
    deleteFolderAction,
    createFolderAction,
    updateFolderAction
} = filesSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FoldersApi.getAll()
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }

        dispatch(getAllAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}
export const removeFile = (fileId, folderId) => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FilesApi.delete(fileId)
        if (response.status !== 204) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(deleteFileAction({ fileId, folderId }))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const createFile = data => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FilesApi.create(data)
        if (response.status !== 201) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(createFileAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const removeFolder = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FoldersApi.delete(id)
        if (response.status !== 204) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(deleteFolderAction(id))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const createFolder = data => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FoldersApi.create(data)
        if (response.status !== 201) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(createFolderAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const updateFolder = (data, id) => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await FoldersApi.update(data, id)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(updateFolderAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}
