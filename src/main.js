import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/appStore'
import App from './containers/App'
const store = configureStore()
const ROOT_ELEM = document.body

render(
    <Provider store={store}>
        <App />
    </Provider>,  ROOT_ELEM
)
