import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'


import TodoInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'
import UsersList from './UsersList'
import RegisterForm from './RegisterForm'

class Main extends Component{

  render(){
    if( this.props.users.length == 0)
      {console.log('ceva');
      this.props.actions.initializeUsers();}

    return (
      <main className="ui inverted">
        <Switch>
          <Route exact path="/userProfile" ><UserInfo actions={this.props.actions} authed={this.props.users[0]}/></Route>
          <Route exact path="/">
            <div>
              <UsersList users = {this.props.users}/>
              <TodoInput addTodo={this.props.actions.addTodo}/>
              <TodoList actions={this.props.actions} todos={this.props.todos}/>
            </div>
          </Route>
          <Route exact path="/signUp">
            <RegisterForm addUser={this.props.actions.addUser}/>
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
