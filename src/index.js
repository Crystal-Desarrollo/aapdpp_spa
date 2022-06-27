import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { App } from './App'

import store from './store/store.js'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        scroll-behavior: smooth;
    }

    body{
        background-color: #ddd;
    }

    main{
        height: calc(100vh - 60px);
        margin-top:60px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }

    i{
        color: #142B4B;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #dddddd;
    }

    &::-webkit-scrollbar-thumb {
      background: #142B4B;
      border-radius: .2rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #082041;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
