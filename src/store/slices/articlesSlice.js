import { createSlice } from '@reduxjs/toolkit'
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
        getOneAction: (store, action) => {
            const { payload } = action
            if (!store.findIndex(x => x.id === payload.id)) {
                store.data.push(action.payload)
            }
        }
    }
})
export default articlesSlice.reducer

const { getAllAction, getOneAction, setLoadingAction } = articlesSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await NewsApi.getAll()
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
        const response = await NewsApi.getOne(id)
        if (response.status === 200) {
            dispatch(getOneAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
    }
}
