import { configureStore } from '@reduxjs/toolkit'
import { compose, combineReducers } from 'redux'

import authReducer from './slices/authSlice.js'

const reducer = combineReducers({
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = window.__PRELOADED_STATE__ || {
    auth: {
        token: localStorage.getItem('aapdpp-token')
    }
}

const store = configureStore({ reducer }, initialState, composeEnhancers())

export default store
