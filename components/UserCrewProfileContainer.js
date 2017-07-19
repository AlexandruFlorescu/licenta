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
    console.log('UserCrewProfileContainer:constructor');
  }

  componentWillMount() {
    console.log('UserCrewProfileContainer:componentWillMount');
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.states.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.props.actions.loginUser(profile.sub)
      });
    } else {
      // this.props.actions.loginUser(userProfile.sub)
      this.setState({ profile: userProfile });
    }
  }

  componentDidMount(){
    console.log('UserCrewProfileContainer:componentDidMount');
    // if(!this.props.states.authed.user_id && this.props.states.auth.user_id) this.props.actions.loginUser(this.state.profile.sub);
  }


  render(){
    console.log('UserCrewProfileContainer:render');
    return (
        <Container>
          <CrewProfileContainer></CrewProfileContainer>
          <UserProfileContainer actions={this.props.actions} {...this.props.states}></UserProfileContainer>
        </Container>
    )
  }
}
export default UserCrewProfileContainer;
