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
    console.log('add_user');
    return dispatch =>{
      fetch('/api/user', {
          method : 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(user)
      })

      dispatch({ type: 'CREATE_USER', payload: user })
    }

  },

  initializeUsers: function() {
    return dispatch => {
      fetch('/api/users')
                  .then( resp => resp.json() )
                  .then( respJson => {
                     dispatch({type: 'INIT_USERS',
                               payload: respJson})
                   })
                   .catch(error => {
                     console.log(error);
                   });
    }
  },

  loginUser: function(user) {
    return dispatch => {
      fetch('/api/login' , {
          method : 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(user) })
          .then( resp => resp.json() )
          .then( resp => {
                    if(resp.success)
                      dispatch({type: 'LOGIN_SUCCESS',
                      payload: resp.token })
                    else
                      dispatch({type: 'LOGIN_FAILED',
                      payload: resp.message })

                })
          .catch(error => {console.log(error);});
    }
  }


}

export default actions;
