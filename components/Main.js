import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'

// import UserInfo from './UserInfo'
import UsersList from './UsersList'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
// import WritePost from './WritePost'
import UserProfileMesh from './userProfileMesh'

class Main extends Component{

  render(){
    if( this.props.users.length == 0)
      {
      this.props.actions.initializeUsers();}
    
    return (
      <main className="ui inverted">
        <Switch>
          <Route exact path="/userProfile" >
              <UserProfileMesh actions={this.props.actions} authed={this.props.authed}/>
          </Route>
          <Route exact path="/">
              <UsersList users = {this.props.users} authed={this.props.authed}/>
          </Route>
          <Route exact path="/signUp">
            <RegisterForm addUser={this.props.actions.addUser} users={this.props.users}/>
          </Route>
          <Route exact path="/signIn">
            <LoginForm loginUser={this.props.actions.loginUser} authed={this.props.authed}/>
          </Route>
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
