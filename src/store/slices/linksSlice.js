import { createSlice } from '@reduxjs/toolkit'
import LinksApi from '../../api/linksApi'

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
        }
    }
})
export default linksSlice.reducer

const { getAllAction, getOneAction } = linksSlice.actions

export const getAll = () => async dispatch => {
    try {
        const response = await LinksApi.getAll()
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
        const response = await LinksApi.getOne(id)
        if (response.status === 200) {
            dispatch(getOneAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
    }
}
