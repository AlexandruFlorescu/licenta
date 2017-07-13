import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
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
import ContactForm from './ContactForm'
import Callback from './Callback/Callback'

class Main extends Component{

  render(){
    if( this.props.users.length == 0)
    {
      // this.props.actions.initializeUsers();
    }


    return (
      <main>
        <Switch>
          <Route exact path="/userProfile" >
            <UserProfileMesh actions={this.props.actions} states={{auth:this.props.auth, posts:this.props.posts, users:this.props.users}}/>
          </Route>
          <Route exact path="/">
            <UsersList states = {{users:this.props.users, auth:this.props.auth}}/>
          </Route>
          <Route exact path="/signIn">
            <LoginForm actions={{loginUser:this.props.actions.loginUser}} states={{auth:this.props.auth, users:this.props.users}}/>
          </Route>
          <Route exact path="/signUp">
            <RegisterForm test={true} actions={{addUser:this.props.actions.addUser}} states={{users: this.props.users}} />
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
