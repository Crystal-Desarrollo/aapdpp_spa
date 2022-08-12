import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false
    },
    reducers: {
        setLoadingAction: (state, action) => {
            state.loading = action.payload
        }
    }
})
export default appSlice.reducer

const { setLoadingAction } = appSlice.actions

export const setLoading = loading => dispatch => {
    dispatch(setLoadingAction(Boolean(loading)))
}
