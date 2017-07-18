var c = require('./constants.js')
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

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  initializeUsers: function() {
    console.log(localStorage.getItem('manageToken'));
    return dispatch =>{
      fetch('https://seastar.eu.auth0.com/api/v2/users',{
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('manageToken'),
        }
      }).then(resp=>resp.json())
      .then(respJson=>dispatch({type:c.INIT_USERS, payload:respJson}))
    }
  },

  updateUser: function(userId, body) {
    return dispatch => {
      fetch('https://seastar.eu.auth0.com/api/v2/users/' + userId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('manageToken'),
        },
        body:JSON.stringify(body)
      }).then(resp=>resp.json())
      .then(respJson=>/* DISPACH FOR REDUX UPDATE*/console.log(respJson))
    }
  },

  getUser: function(userId) {
    return dispatch => {
      fetch('https://seastar.eu.auth0.com/api/v2/users/' + userId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('manageToken'),
        }
      }).then(resp=>resp.json())
      .then(respJson=>
              dispatch({type: c.LOGIN_SUCCESS,
                      payload: respJson })
    )
    }
  },

  // return dispatch => {
  //   fetch('/api/users')
  //               .then( resp => resp.json() )
  //               .then( respJson => {
  //                  dispatch({type: c.INIT_USERS,
  //                            payload: respJson})
  //                })
  //                .catch(error => {
  //                  console.log(error);
  //                });
  // }


  loginUser: function(userId) {

    // while(!userId) {let i=0;}
    // console.count();
    if(userId) console.log(userId);
    return dispatch => {
      fetch('https://seastar.eu.auth0.com/api/v2/users/' + userId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('manageToken'),
        }
      }).then(resp=>resp.json())
      .then(respJson=>{
              // console.log(respJson.message);
              dispatch({type: c.LOGIN_SUCCESS,
                      payload: respJson })
                    }
    )
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
