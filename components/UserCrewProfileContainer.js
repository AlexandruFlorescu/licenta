import React, {Component} from 'react';
import styled from 'styled-components';
import { lighten } from 'polished'
import UserProfileContainer from './UserProfileContainer'
import CrewProfileContainer from './CrewProfileContainer'

const Container = styled.div`
  flex:1;
  display: flex;
  justify-content: space-around;
  `;

class UserCrewProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.states.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }


  render(){
    if(!this.props.states.authed.user_id) this.props.actions.loginUser(this.state.profile.sub);
    return (
        <Container>
          <UserProfileContainer actions={this.props.actions} {...this.props.states}></UserProfileContainer>
          <CrewProfileContainer></CrewProfileContainer>

        </Container>
    )
  }
}
export default UserCrewProfileContainer;
