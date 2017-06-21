var c = require('./../constants.js')

let userReducer = function(users=[], action){

  switch (action.type) {

    case c.CREATE_USER:
    return [{
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      }, ...users];

    case c.INIT_USERS:
    return action.payload;

    default:
      return users;
    }

  }

export default userReducer
