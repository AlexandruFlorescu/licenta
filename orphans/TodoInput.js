import React, { Component } from 'react'
import actions from '../redux/actionCreators'
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handSubmit.bind(this)}>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <input type="submit" text='trimite'/>
        </form>
      </div>
    )
  }

}

export default TodoInput
