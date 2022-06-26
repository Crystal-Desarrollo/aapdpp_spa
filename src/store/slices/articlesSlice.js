import { createSlice } from '@reduxjs/toolkit'
import NewsApi from '../../api/newsApi'

const articlesSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        getAllAction: (_, action) => {
            return action.payload
        }
    }
})
export default articlesSlice.reducer

const { getAllAction } = articlesSlice.actions

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
