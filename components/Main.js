import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'

import UsersList from './UsersList'
import UserCrewProfileContainer from './UserCrewProfileContainer'
import ContactForm from './ContactForm'
import Callback from './Callback/Callback'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  flex:1
  height:100%;
  `;

class Main extends Component{


  render(){
    if( this.props.users.length == 0)
    {
      // this.props.actions.initializeUsers();
    }


    return (
      <main>
        <Switch>
          <Route exact path="/">
            <UsersList states = {{users:this.props.users, auth:this.props.auth}} actions={{initializeUsers:this.props.actions.initializeUsers, updateUsers:this.props.actions.updateUsers}}/>
          </Route>
          <Route exact path="/userProfile" >
            <UserCrewProfileContainer actions={this.props.actions} states={{auth:this.props.auth, users:this.props.users, authed:this.props.authed}}/>
          </Route>
          <Route exact path="/contact">
            <ContactForm>
            </ContactForm>
          </Route>
          <Route path="/callback" render={(props)=>{
              this.props.auth.handleAuthentication();
              return <Callback {...props} />
              }}/>
        </Switch>
      </main>
    )
  }

}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))



// <Route exact path="/signIn">
//   <LoginForm actions={{loginUser:this.props.actions.loginUser}} states={{auth:this.props.auth, users:this.props.users}}/>
// </Route>
// <Route exact path="/signUp">
//   <RegisterForm test={true} actions={{addUser:this.props.actions.addUser}} states={{users: this.props.users}} />
// </Route>
