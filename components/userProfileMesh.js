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
  render(){
    var Sticky = require('react-stickynode');
    if(this.props.authed.token!=null)
      return(
      <Grid>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={3}>
          <Sticky enabled={true} top={50}>
            <UserInfo actions={this.props.actions} authed={this.props.authed}/>
          </Sticky>
        </Grid.Column>
        <Grid.Column width={11}>
          <UserDetail/>
          {/*<WritePost sendPost={this.props.actions.sendPost} authed={this.props.authed}/>*/}
          <ListPosts authed={this.props.authed} posts={this.props.posts.filter(post=> post.author == jwt_decode(this.props.authed.token)._doc._id)} author={jwt_decode(this.props.authed.token)._doc}/>
        </Grid.Column>
      </Grid>
    )
    else
      {return <Redirect push to='/'/>;}
  }
}
export default UserProfileMesh;
