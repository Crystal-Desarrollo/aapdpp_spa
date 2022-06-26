import { configureStore } from '@reduxjs/toolkit'
import { compose, combineReducers } from 'redux'

import authReducer from './slices/authSlice.js'
import newsReducer from './slices/articlesSlice.js'

const reducer = combineReducers({
    auth: authReducer,
    news: newsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = window.__PRELOADED_STATE__ || {
    auth: {
        user: null,
        token: localStorage.getItem('aapdpp-token')
    },
    news: []
}

const store = configureStore({ reducer }, initialState, composeEnhancers())

export default store
