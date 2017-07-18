import React, {Component} from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const DashboardWrapper= styled.div`
  width: 95%;
  height: 95%;
  margin-left:101px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
`;

class UserList extends Component{
  constructor(props){
    super(props);
    this.state = {users: []};
  }

  componentWillMount(){
    if(this.props.states.users.length <= 0 && localStorage.getItem('manageToken'))
      {this.props.actions.initializeUsers();}
  }
  render(){
    console.log(this.props.states.users);
    return (
      <DashboardWrapper>
          {this.props.states.users.map( (user)=>
            <UserCard key={this.props.states.users.indexOf(user)} user={user}/> )}
      </DashboardWrapper>
    )
  }
}

export default UserList
