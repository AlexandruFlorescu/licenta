var c = require('./../constants.js')

let authedReducer = function(authed={}, action){
  switch (action.type) {
    case c.LOGIN_SUCCESS:
      return Object.assign({}, authed, action.payload);
    case c.LOG_OFF:
      return {}
    default: return authed;
  }
}

export default authedReducer;
