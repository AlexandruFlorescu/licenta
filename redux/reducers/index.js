import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authedReducer from './authedReducer'
import postReducer from './postReducer'
import uiReducer from './uiReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    users: userReducer,
    authed: authedReducer,
    router: routerReducer,
    posts: postReducer,
    ui: uiReducer,
})

//authed: authedReducer,

export default rootReducer
