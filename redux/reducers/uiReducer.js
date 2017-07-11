var c = require('./../constants.js')

let uiReducer = function(ui={}, action){
  switch(action.type){
    case c.CHANGE_COLOR: return Object.assign({},ui , {color: action.payload});
  }
  return ui;
}

export default uiReducer;
