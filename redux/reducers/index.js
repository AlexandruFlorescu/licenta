import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authedReducer from './authedReducer'
import uiReducer from './uiReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    users: userReducer,
    authed: authedReducer,
    router: routerReducer,
    ui: uiReducer,
})

//authed: authedReducer,

export default rootReducer
