import { createSlice } from '@reduxjs/toolkit'
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
        }
    }
})
export default linksSlice.reducer

const { getAllAction, getOneAction, setLoadingAction } = linksSlice.actions

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
