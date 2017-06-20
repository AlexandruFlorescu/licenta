const CREATE_USER = 'CREATE_USER';
const INIT_USERS = 'INIT_USERS';

let userReducer = function(users=[], action){

  switch (action.type) {

    case CREATE_USER:
    return [{
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      }, ...users];

    case INIT_USERS:
    return action.payload;

    default:
      return users;
    }

  }

export default userReducer
