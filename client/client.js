import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//
// var users = [];
// fetch('/api/users')
//             .then( resp => resp.json() )
//             .then( respJson => {
//                users = respJson;
//              })
//              .catch(error => {
//                console.log(error);
//              });


let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  users: []
}

// authed:{
//   id: 0,
//   token: 1234
// }
// console.log(users);

let store = configureStore(initialState);
render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
