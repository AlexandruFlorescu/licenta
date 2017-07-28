var c = require('./../constants.js')

let authedReducer = function(authed={}, action){
  switch (action.type) {
    case c.LOGIN_SUCCESS:
      return Object.assign({}, authed, action.payload);
    case c.LOG_OFF:
      return {}
    case c.LOGIN_UPDATE:
      return Object.assign({}, authed, action.payload);
    default: return authed;
  }
}

export default authedReducer;
