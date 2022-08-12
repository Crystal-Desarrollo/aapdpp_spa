import { createSlice } from '@reduxjs/toolkit'
import NewsApi from '../../api/newsApi'
import { setLoading } from './appSlice'
import { SOMETHING_WENT_WRONG } from '../../i18n/common'

const articlesSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        },
        getOneAction: (state, action) => {
            const { payload } = action
            const index = state.findIndex(
                x => Number(x.id) === Number(payload.id)
            )
            if (index < 0) {
                state.push(action.payload)
            } else {
                state.splice(index, 1, action.payload)
            }
        },
        deleteAction: (state, action) => {
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.splice(index, 1)
        },
        createAction: (state, action) => {
            state.push(action.payload)
        },
        editAction: (state, action) => {
            const { payload } = action
            const index = state.findIndex(x => x.id === payload.id)
            state.splice(index, 1, action.payload)
        }
    }
})
export default articlesSlice.reducer

const { getAllAction, getOneAction, deleteAction, createAction, editAction } =
    articlesSlice.actions
export const getAll = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await NewsApi.getAll()
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

export const getOne = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await NewsApi.getOne(id)
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

export const remove = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await NewsApi.delete(id)

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

export const create = data => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await NewsApi.create(data)
        if (response.status !== 201) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }

        dispatch(createAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const edit = (data, id) => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await NewsApi.edit(data, id)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }

        dispatch(editAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}
