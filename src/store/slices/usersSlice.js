import { createSlice } from '@reduxjs/toolkit'
import UsersApi from '../../api/usersApi'
import { SOMETHING_WENT_WRONG } from '../../i18n/common'
import { setLoading } from './appSlice'

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        },
        getOneAction: (state, action) => {
            if (!state.findIndex(x => x.id === Number(action.payload.id))) {
                state.push(action.payload)
            }
        },
        registerAction: (state, action) => {
            state.push(action.payload)
        },
        deleteAction: (state, action) => {
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.splice(index, 1)
        },
        updateAction(state, action) {
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.splice(index, 1, action.payload)
        }
    }
})
export default usersSlice.reducer

const {
    getAllAction,
    getOneAction,
    registerAction,
    deleteAction,
    updateAction
} = usersSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.getAll()
        if (response.status === 200) {
            dispatch(getAllAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const getOne = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.getOne(id)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(getOneAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const register = data => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.register(data)
        if (response.status !== 201) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(registerAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.response.data.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.delete(id)
        if (response.status !== 204) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(deleteAction(id))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const update = (id, data) => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.update(id, data)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(updateAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const updateStatus = (id, data) => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await UsersApi.updateStatus(id, data)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(updateAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}
