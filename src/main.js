import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import App from './containers/App'
const store = configureStore()
const ROOT_ELEM = document.querySelector('main')

render(
    <Provider store={store}>
        <App />
    </Provider>,  ROOT_ELEM
)
