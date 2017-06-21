import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import UserInfo from './UserInfo';
import WritePost from './WritePost';
import ListPosts from './ListPosts';

class UserProfileMesh extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.authed);
    return(
    <Grid>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={3}>
        <UserInfo actions={this.props.actions} authed={this.props.authed}/>
      </Grid.Column>
      <Grid.Column width={11}>
        <WritePost sendPost={this.props.actions.sendPost} authed={this.props.authed}/>
        <ListPosts authed={this.props.authed} posts={this.props.posts}/>
      </Grid.Column>
    </Grid>
  )
  }
}
export default UserProfileMesh;
