import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authedReducer from './authedReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    users: userReducer,
    authed: authedReducer,
    router: routerReducer
})

//authed: authedReducer,

export default rootReducer
