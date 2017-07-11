import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
let initialState = {
  users:[],
  authed: {},
  ui:{color:'green'},
}

///test

let store = configureStore(initialState);
render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
