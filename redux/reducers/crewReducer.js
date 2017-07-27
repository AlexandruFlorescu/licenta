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
      return action.payload;

    default:
      return crews;
    }

  }

export default crewReducer
