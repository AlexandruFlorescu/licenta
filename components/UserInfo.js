import React, {Component} from 'react'

class UserInfo extends Component{

  handleNewId(){
    this.props.actions.createNewUserId()
  }

  handleNewIdIfOdd(){
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync(){
    this.props.actions.createNewUserIdAsync()
  }

  render(){
    return (
      <li>
        <div> username: {this.props.users[0].username}</div>
        <div> id: {this.props.users[0].id}</div>
        <button className="btn-primary" onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update with if odd ID</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update with async ID</button>
      </li>
    )
  }
}

export default UserInfo
