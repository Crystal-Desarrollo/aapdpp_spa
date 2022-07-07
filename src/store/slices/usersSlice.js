import { createSlice } from '@reduxjs/toolkit'
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
        }
    }
})
export default usersSlice.reducer

const { getAllAction, setLoadingAction } = usersSlice.actions

export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await UsersApi.getAll()
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
