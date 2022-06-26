import { createSlice } from '@reduxjs/toolkit'
import AuthApi from '../../api/authApi.js'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        register(state, action) {},
        loginAction: (_, action) => {
            return action.payload
        },
        logoutAction() {
            return null
        }
    }
})
export default authSlice.reducer

const { loginAction, logoutAction } = authSlice.actions

export const login = userData => async dispatch => {
    try {
        const response = await AuthApi.login(userData)
        if (response.status === 200) {
            localStorage.setItem('aapdpp-token', response.data.token)
            dispatch(loginAction(response.data))
            return
        }
    } catch (err) {
        // TODO:handle error
    }
}

export const logout = () => async dispatch => {
    try {
        await AuthApi.logout()

        localStorage.removeItem('aapdpp-token')
        dispatch(logoutAction())
    } catch (err) {
        //TODO: handle error
    }
}
