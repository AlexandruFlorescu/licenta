let actions = {

//OLDS
  addTodo: function(text){
    return {
      type: 'ADD_TODO',
      payload: text
    }
  },

  completeTodo: function(id){
    return {
      type: 'COMPLETE_TODO',
      payload: id
    }
  },

  deleteTodo: function(id){
    return {
      type: 'DELETE_TODO',
      payload: id
    }
  },

  createNewUserIdIfOdd: function(){
    return (dispatch,getState) => {
      const {user} = getState()
      if(user.id%2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function(){
      return (dispatch) => {
          setTimeout(()=>{ dispatch(actions.createNewUserId())}, 2500)
        }

    },

  //NEWS
  addUser: function(user) {
    return {
      type: 'CREATE_USER',
      payload: user
    }
  },
}

export default actions;
