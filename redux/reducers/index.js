import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import authedReducer from './authedReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    todos: todoReducer,
    users: userReducer,
    authed: authedReducer,
    router: routerReducer
})

//authed: authedReducer,

export default rootReducer
