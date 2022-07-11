import { createSlice } from '@reduxjs/toolkit'
import AuthApi from '../../api/authApi.js'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        data: {
            user: null,
            token: null
        }
    },
    reducers: {
        setLoadingAction: (state, action) => {
            state.loading = action.payload
        },
        loginAction: (state, action) => {
            state.data = action.payload
        },
        logoutAction(state) {
            state.data = {
                user: null,
                token: null
            }
        },
        meAction(state, action) {
            state.data = action.payload
        }
    }
})
export default authSlice.reducer

const { loginAction, logoutAction, meAction, setLoadingAction } =
    authSlice.actions

export const login = userData => async dispatch => {
    try {
        const response = await AuthApi.login(userData)
        if (response.status === 200) {
            localStorage.setItem('aapdpp-token', response.data.token)
            dispatch(loginAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.response.data)
    }
}

export const logout = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        await AuthApi.logout()
        localStorage.removeItem('aapdpp-token')
        dispatch(logoutAction())
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const me = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
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
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
