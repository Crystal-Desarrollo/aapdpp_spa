import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import UsersApi from '../../api/usersApi'

const usersSlice = createSlice({
    name: 'users',
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
        registerAction: (state, action) => {
            state.data.push(action.payload)
        },
        deleteAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.data.splice(index, 1)
        },
        updateAction(state, action) {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.data.splice(index, 1, action.payload)
        }
    }
})
export default usersSlice.reducer

const {
    getAllAction,
    setLoadingAction,
    registerAction,
    deleteAction,
    updateAction
} = usersSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await UsersApi.getAll()
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

export const register = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await UsersApi.register(data)
        if (response.status === 200) {
            dispatch(registerAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.response.data.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await UsersApi.delete(id)
        if (response.status === 204) {
            dispatch(deleteAction(id))
            toast.success('Usuario eliminad0')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const update = (id, data) => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await UsersApi.update(id, data)
        dispatch(updateAction(response.data))
        toast.success('Información actualizada')
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
