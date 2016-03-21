import React from 'react'
import Rx from 'rx'

import {render} from 'react-dom'
//import { Provider } from 'react-redux'
//import configureStore from './stores/configureStore'
import PoloModel from './models/polo'
import App from './containers/App'
//const store = configureStore()
const ROOT_ELEM = document.querySelector('main')

PoloModel.subject.subscribe((appState) => {
  render(
    <App {...appState}/>,
    ROOT_ELEM
  )
})
