const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

let authedReducer = function(authed={}, action){
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, authed, action.payload);
    default: return authed;
  }
}

export default authedReducer;
