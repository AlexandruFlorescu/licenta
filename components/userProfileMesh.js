import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import UserInfo from './UserInfo';
import WritePost from './WritePost';


class UserProfileMesh extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.authed);
    return(
    <Grid>
      <Grid.Column width={3}>
        <UserInfo actions={this.props.actions} authed={this.props.authed}/>
      </Grid.Column>
      <Grid.Column width={12}>
        <WritePost sendPost={this.props.actions.sendPost} authed={this.props.authed}/>
      </Grid.Column>
    </Grid>)
  }
}

export default UserProfileMesh;
