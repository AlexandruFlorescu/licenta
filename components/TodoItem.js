import React, { Component } from 'react'
import actions from '../redux/actionCreators'

class TodoItem extends Component {

  handleComplete(){
    this.props.actions.completeTodo(this.props.todo.id);
  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
       <li key={this.props.todo.id}>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}> Delete todo</button>
        </li>

    )
  }

}

export default TodoItem
