import React, {Component} from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const DashboardWrapper= styled.div`
  width: 95%;
  height: 90%;
  margin-left:101px;
  padding: 5px;
  border:1px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

class UserList extends Component{

  render(){
    return (
      <DashboardWrapper>
          {this.props.state.users.map( (user)=>{return <UserCard key={this.props.state.users.indexOf(user)} user={user}/>} )}
      </DashboardWrapper>
    )
  }
}

export default UserList
