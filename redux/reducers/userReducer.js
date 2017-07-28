var c = require('./../constants.js')

let userReducer = function(users=[], action){

  switch (action.type) {

    case c.CREATE_USER:
      return [{
          username: action.payload.username,
          password: action.payload.password,
          email: action.payload.email,
        }, ...users];

    case c.UPDATE_USER:
    { console.log('update USEEEER');
      console.log(action.payload);

      return users.map(user=>{
        return user.user_id == action.payload.user_id ?
          Object.assign({}, user, action.payload.body) : user;
      })
    }

    case c.INIT_USERS:
      return action.payload;

    default:
      return users;
    }

  }

export default userReducer
