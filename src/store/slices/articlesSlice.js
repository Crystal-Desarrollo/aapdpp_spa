import { createSlice } from '@reduxjs/toolkit'
import NewsApi from '../../api/newsApi'

const articlesSlice = createSlice({
    name: 'news',
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
        }
    }
})
export default articlesSlice.reducer

const { getAllAction, getOneAction } = articlesSlice.actions

export const getAll = () => async dispatch => {
    try {
        const response = await NewsApi.getAll()
        if (response.status === 200) {
            dispatch(getAllAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
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
