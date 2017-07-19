import React, {Component} from 'react';
import styled from 'styled-components';
import { lighten } from 'polished'
import UserProfileContainer from './UserProfileContainer'
import CrewProfileContainer from './CrewProfileContainer'

const Container = styled.div`
  flex:1;
  display: flex;
  justify-content: space-around;
  margin-left:100px;
  height:90%;
  `;

class UserCrewProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Container>
          <CrewProfileContainer></CrewProfileContainer>
          <UserProfileContainer {...this.props.states}></UserProfileContainer>
        </Container>
    )
  }
}
export default UserCrewProfileContainer;
