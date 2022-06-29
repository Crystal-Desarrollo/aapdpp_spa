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
        logoutAction(_, action) {
            return {
                user: null,
                token: null
            }
        },
        meAction(_, action) {
            return action.payload
        }
    }
})
export default authSlice.reducer

const { loginAction, logoutAction, meAction } = authSlice.actions

export const login = userData => async dispatch => {
    try {
        const response = await AuthApi.login(userData)
        if (response.status === 200) {
            localStorage.setItem('aapdpp-token', response.data.token)
            dispatch(loginAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
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

export const me = () => async dispatch => {
    try {
        const token = localStorage.getItem('aapdpp-token')

        if (token) {
            const response = await AuthApi.me(token)
            dispatch(
                meAction({
                    user: response.data,
                    token
                })
            )
        }
    } catch (err) {
        //TODO: handle error
    }
}
