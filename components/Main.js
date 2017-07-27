//externals
import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'

//internals
import actions from '../redux/actionCreators'
import UsersList from './UsersList'
import UserCrewProfileContainer from './UserCrewProfileContainer'
import ContactForm from './ContactForm'
import Callback from './Callback/Callback'
import CrewsList from './CrewsList'

class Main extends Component{
  componentWillMount(){
    if(this.props.users.length <= 0 && localStorage.getItem('manageToken'))
      this.props.actions.initializeUsers();
    if(localStorage.getItem('manageToken'))
      this.props.actions.initializeCrews();
    if(this.props.auth.isAuthenticated())
      {const { userProfile, getProfile } = this.props.auth;
      if (!userProfile) {
        getProfile((err, profile) => {
          this.props.actions.loginUser(profile.sub)
        });
      }}
  }

  render(){
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <UsersList
              users={this.props.users}/>
          </Route>
          <Route exact path="/userProfile" >
            <UserCrewProfileContainer
              states={{auth:this.props.auth, users:this.props.users, authed:this.props.authed}}/>
          </Route>
          <Route exact path="/contact">
            <ContactForm>
            </ContactForm>
          </Route>
          <Route exact path="/crewsList">
            <CrewsList>

            </CrewsList>
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
export default Main
