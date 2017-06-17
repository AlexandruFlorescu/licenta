let authedReducer = function(authed={}, action){
  switch (action.type) {
    case 'LOGGED_IN':
      return authed
    default: return null

  }
}
