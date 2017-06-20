let authedReducer = function(authed={}, action){
  switch (action.type) {
    case 'LOGIN_SUCESS':
      console.log(action.payload);
      return action.payload;
    default: return null
  }
}

export default authedReducer;
