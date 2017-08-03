var c = require('./../constants.js')

let postsReducer = function(posts = [], action){

  switch(action.type){
    case c.ADD_POST:
      return [action.payload, ...posts];
    case c.INIT_POSTS:
      return action.payload;
    default:
      return posts;
  }

}

export default postsReducer;
