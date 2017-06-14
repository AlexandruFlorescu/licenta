
function getId(users) {
  console.log(users)
  return users.reduce((maxId, user) => {
    return Math.max(user.id, maxId);
  }, -1) + 1
}

let userReducer = function(users=[], action){

  switch (action.type) {

    case 'CREATE_USER':
    return [{
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        id: getId(users)
    }, ...users]
    default:
      return users;
    }

  }

export default userReducer
