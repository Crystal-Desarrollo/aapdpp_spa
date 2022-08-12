import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import AuthApi from '../../api/authApi.js'
import { SESSION_CLOSED, SOMETHING_WENT_WRONG } from '../../i18n/common.js'
import { setLoading } from './appSlice.js'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        loginAction: (_, action) => {
            return action.payload
        },
        logoutAction() {
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
        dispatch(setLoading(true))
        const response = await AuthApi.login(userData)
        if (response.status !== 200) {
            return Promise.reject(SOMETHING_WENT_WRONG)
        }
        localStorage.setItem('aapdpp-token', response.data.token)
        dispatch(loginAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.response.data)
    } finally {
        dispatch(setLoading(false))
    }
}

export const logout = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        await AuthApi.logout()
        localStorage.removeItem('aapdpp-token')
        dispatch(logoutAction())
        return Promise.resolve()
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}

export const me = () => async dispatch => {
    try {
        dispatch(setLoading(true))

        const token = localStorage.getItem('aapdpp-token')
        if (!token) {
            return Promise.reject(SESSION_CLOSED)
        }

        const response = await AuthApi.me(token)
        const data = { user: response.data, token }
        dispatch(meAction(data))
    } catch (err) {
        localStorage.removeItem('aapdpp-token')
        toast.error(SESSION_CLOSED)
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoading(false))
    }
}
