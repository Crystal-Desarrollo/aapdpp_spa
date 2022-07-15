import { configureStore } from '@reduxjs/toolkit'
import { compose, combineReducers } from 'redux'

import authReducer from './slices/authSlice.js'
import newsReducer from './slices/articlesSlice.js'
import linksReducer from './slices/linksSlice.js'
import usersReducer from './slices/usersSlice.js'
import libraryReducer from './slices/librarySlice.js'

const reducer = combineReducers({
    auth: authReducer,
    news: newsReducer,
    links: linksReducer,
    users: usersReducer,
    library: libraryReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = window.__PRELOADED_STATE__ || {
    auth: {
        user: null,
        token: localStorage.getItem('aapdpp-token')
    },
    news: [],
    links: []
}

const store = configureStore({ reducer }, initialState, composeEnhancers())

export default store
