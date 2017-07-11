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
import ContactForm from './ContactForm'

class Main extends Component{

  render(){
    if( this.props.users.length == 0)
    {
      this.props.actions.initializeUsers();
    }
    if(this.props.posts.length == 0)
    {
      this.props.actions.initializePosts();
    }

    return (
      <main>
        <Switch>
          <Route exact path="/userProfile" >
            <UserProfileMesh actions={this.props.actions} authed={this.props.authed} posts={this.props.posts} users = {this.props.users}/>
          </Route>
          <Route exact path="/">
            <UsersList state = {{users:this.props.users, authed:this.props.authed}}/>
          </Route>
          <Route exact path="/signIn">
            <LoginForm actions={{loginUser:this.props.actions.loginUser,addUser:this.props.actions.addUser}} states={{authed:this.props.authed, users:this.props.users}}/>
          </Route>
          <Route exact path="/signUp">
            <RegisterForm test={true} actions={{addUser:this.props.actions.addUser}} states={{users: this.props.users}} />
          </Route>
          <Route exact path="/contact">
            <ContactForm>

            </ContactForm>
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
