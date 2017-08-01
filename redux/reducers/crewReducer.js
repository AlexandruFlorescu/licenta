var c = require('./../constants.js')

let crewReducer = function(crews=[], action){

  switch (action.type) {

    case c.CREATE_CREW:
      return [{
          name: action.payload.name,
          image: action.payload.image,
          email: action.payload.email,
        }, ...crews];

    case c.INIT_CREWS:
      return action.payload || crews;

    case c.ADD_USER_TO_CREW:
      return crews.map(crew=>{
        return crew._id === action.payload.crew._id ?
              { ...crew, users: [...crew.users, action.payload.user.user_id] }
              : crew
      })

    default:
      return crews;
    }

  }

export default crewReducer
