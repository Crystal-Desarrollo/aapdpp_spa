import { createSlice } from '@reduxjs/toolkit'
import EventsApi from '../../api/eventsApi'
import { setLoading } from './appSlice'
import { SOMETHING_WENT_WRONG } from '../../i18n/common'

const eventsSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        },
        getOneAction: (state, action) => {
            const { payload } = action
            if (!state.findIndex(x => x.id === payload.id)) {
                state.push(action.payload)
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
            const index = state.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.splice(index, action.payload.data)
        }
    }
})
export default eventsSlice.reducer

const { getAllAction, getOneAction, deleteAction, createAction, editAction } =
    eventsSlice.actions
export const getAll = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await EventsApi.getAll()
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
        const response = await EventsApi.getOne(id)
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
        const response = await EventsApi.delete(id)
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
        const response = await EventsApi.create(data)
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

export const edit = data => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await EventsApi.edit(data)
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
