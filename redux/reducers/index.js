import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authedReducer from './authedReducer'
import postReducer from './postReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    users: userReducer,
    authed: authedReducer,
    router: routerReducer,
    posts: postReducer,
})

//authed: authedReducer,

export default rootReducer
