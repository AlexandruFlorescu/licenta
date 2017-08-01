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
  }

  render(){
    return (
        <Container>
          <CrewProfileContainer {...this.props.states}></CrewProfileContainer>
          <UserProfileContainer actions = {{updateUser: this.props.actions.updateUser}} {...this.props.states}></UserProfileContainer>
        </Container>
    )
  }
}
export default UserCrewProfileContainer;
