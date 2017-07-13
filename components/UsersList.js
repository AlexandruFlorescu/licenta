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

  render(){
    console.log(this.props.states.auth);
    console.log(this.props.states.auth.isAuthenticated());
    return (
      <DashboardWrapper>
          {this.props.states.users.map( (user)=>{return <UserCard key={this.props.states.users.indexOf(user)} user={user}/>} )}
      </DashboardWrapper>
    )
  }
}

export default UserList
