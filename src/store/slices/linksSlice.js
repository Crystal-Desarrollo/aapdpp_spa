import { createSlice } from '@reduxjs/toolkit'
import LinksApi from '../../api/linksApi'
import { setLoading } from './appSlice'
import { SOMETHING_WENT_WRONG } from '../../i18n/common'

const linksSlice = createSlice({
    name: 'links',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        },
        getOneAction: (store, action) => {
            const { payload } = action
            if (!store.findIndex(x => x.id === payload.id)) {
                store.push(action.payload)
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
        }
    }
})
export default linksSlice.reducer

const { getAllAction, getOneAction, deleteAction, createAction } =
    linksSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await LinksApi.getAll()
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
        const response = await LinksApi.getOne(id)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        dispatch(getOneAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoading(true))
        const response = await LinksApi.delete(id)
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
        const response = await LinksApi.create(data)
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
