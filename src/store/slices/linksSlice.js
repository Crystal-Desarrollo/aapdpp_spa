import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import LinksApi from '../../api/linksApi'

const linksSlice = createSlice({
    name: 'links',
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
        getOneAction: (store, action) => {
            const { payload } = action
            if (!store.findIndex(x => x.id === payload.id)) {
                store.push(action.payload)
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
        }
    }
})
export default linksSlice.reducer

const { getAllAction, getOneAction, setLoadingAction, deleteAction } =
    linksSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await LinksApi.getAll()
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

export const getOne = id => async dispatch => {
    try {
        const response = await LinksApi.getOne(id)
        if (response.status === 200) {
            dispatch(getOneAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await LinksApi.delete(id)
        if (response.status === 204) {
            dispatch(deleteAction(id))
            toast.success('Enlace eliminado')
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
        const response = await LinksApi.create(data)
        if (response.status === 201) {
            dispatch(deleteAction(response.data))
            toast.success('Enlace agregado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
