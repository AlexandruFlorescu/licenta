var c = require('./constants.js')

let actions = {
  addUser: function(user) {
    return dispatch =>{
      fetch('/api/register', {
          method : 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(user)
      })

      dispatch({ type: c.CREATE_USER, payload: user })
    }
  },

  initializeUsers: function() {
    return dispatch => {
      fetch('/api/users')
                  .then( resp => resp.json() )
                  .then( respJson => {
                     dispatch({type: c.INIT_USERS,
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
                      dispatch({type: c.LOGIN_SUCCESS,
                              payload: {token:resp.token, user: user}})
                    else
                      dispatch({type: c.LOGIN_FAILED,
                              payload: resp.message })

                })
          .catch(error => {console.log(error);});
    }
  },

  logOff: function(){
    return {type: c.LOG_OFF, payload: {}};
  },

  sendPost: function(post, token) {
    return dispatch => {
      fetch('/api/sendPost', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+token,
        },
        body: JSON.stringify(post) })
        .then(resp => resp.json())
        .then(respJson => {
          dispatch({type: c.ADD_POST, payload:respJson})
        })
    }
  },

  initializePosts: function(){
    return dispatch => {
      fetch('/api/posts')
        .then(resp => resp.json() )
        .then(respJson => {
          dispatch({type: c.INIT_POSTS,
                  payload: respJson})
        })
        .catch(error => {
          console.log(error);
        })
    }
  },

  changeColor: function(color){
    return {type: c.CHANGE_COLOR, payload: color};
  }



}

export default actions;
