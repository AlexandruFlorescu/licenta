//externals
import React, {Component} from 'react';
import styled from 'styled-components';
import { lighten } from 'polished'

//internal
import UserProfileContainer from './UserProfileContainer'
import CrewProfileContainer from './CrewProfileContainer'

//stuff that should be declared someplace else :3
const Container = styled.div`
  flex:1;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-left:100px;
  height: 95vh;
  `;

class UserCrewProfileContainer extends Component{
  constructor(props){
    super(props);
    this.changedSelectedUser = this.changedSelectedUser.bind(this);
    this.state = {selectedUser: null }

  }

  changedSelectedUser(sU){
    this.setState({selectedUser: sU});
    // console.log(this.state.selectedUser);
  }

  render(){
    return (
        <Container>
          <CrewProfileContainer {...this.props.states} changedSelectedUser={this.changedSelectedUser}></CrewProfileContainer>
          <UserProfileContainer actions = {{updateUser: this.props.actions.updateUser}} selectedUser={this.state.selectedUser} {...this.props.states}></UserProfileContainer>
        </Container>
    )
  }
}
export default UserCrewProfileContainer;
