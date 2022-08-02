import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import NewsApi from '../../api/newsApi'

const articlesSlice = createSlice({
    name: 'news',
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
        getOneAction: (state, action) => {
            const { payload } = action
            if (!state.findIndex(x => x.id === payload.id)) {
                state.data.push(action.payload)
            }
        },
        deleteAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.data.splice(index, 1)
        },
        createAction: (state, action) => {
            state.data.push(action.payload)
        },
        editAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.data.splice(index, 1, action.payload)
        }
    }
})
export default articlesSlice.reducer

const {
    getAllAction,
    getOneAction,
    setLoadingAction,
    deleteAction,
    createAction,
    editAction
} = articlesSlice.actions
export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.getAll()
        if (response.status === 200) {
            dispatch(getAllAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const getOne = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.getOne(id)
        if (response.status === 200) {
            dispatch(getOneAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.delete(id)
        if (response.status === 204) {
            dispatch(deleteAction(id))
            toast.success('Noticia eliminada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const create = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.create(data)
        if (response.status === 201) {
            dispatch(createAction(response.data))
            toast.success('Noticia agregada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const edit = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.edit(data)
        if (response.status === 200) {
            dispatch(editAction(response.data))
            toast.success('Noticia actualizada')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
