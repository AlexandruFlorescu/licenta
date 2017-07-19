var c = require('./constants.js')

let actions = {
  initializeUsers: function() {
    // console.log(localStorage.getItem('manageToken'));
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
  loginUser: function(userId) {
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
              dispatch({type: c.LOGIN_SUCCESS,
                      payload: respJson })
                    } )
    }
  },
  logOff: function(){
    return {type: c.LOG_OFF, payload: {}};
  },
  changeColor: function(color){
    return {type: c.CHANGE_COLOR, payload: color};
  }
}

export default actions;
