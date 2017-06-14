import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  users:[{
    username: 'alex',
    id: 0,
    email: 'acdc152@gmail.com',
    password: 'bla'
  }]
}


let store = configureStore(initialState);
render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
