let authedReducer = function(authed={}, action){
  switch (action.type) {
    case 'LOGIN_SUCESS':
      return action.payload;
    default: return null

  }
}

export default authedReducer;
