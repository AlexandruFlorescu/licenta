import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'


import TodoInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'
import RegisterForm from './RegisterForm'

class Main extends Component{

  render(){

    return (
      <main className="ui inverted">
        <Switch>
          <Route exact path="/userProfile" ><UserInfo actions={this.props.actions} users={this.props.users}/></Route>
          <Route exact path="/">
            <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
