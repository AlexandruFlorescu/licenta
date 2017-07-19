//externals
import React, {Component} from 'react'
import styled from 'styled-components'

//internals
import UserCard from './UserCard'

//stuff I should have declared someplace else
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

  render(){
    return (
      <DashboardWrapper>
          {this.props.users.map( (user)=>
            <UserCard key={this.props.users.indexOf(user)} user={user}/> )}
      </DashboardWrapper>
    )
  }
}

export default UserList
