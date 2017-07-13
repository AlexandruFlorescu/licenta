import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import UserInfo from './UserInfo';
import WritePost from './WritePost';
import ListPosts from './ListPosts';
import jwt_decode from 'jwt-decode';
import {Redirect} from 'react-router';
import UserDetail from './UserDetails';


class UserProfileMesh extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.setState({ profile: {} });
    console.log(this.props.states.auth);
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

    console.log(this.state);
  return <div>{this.state.profile.user_metadata}</div>
  }
}
export default UserProfileMesh;
