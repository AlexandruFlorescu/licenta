import React, {Component} from 'react';
import {Grid, Header, Button, Rail, Divider} from 'semantic-ui-react';
// import PostDetail from './PostDetail';


class ListPosts extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
          <Grid>
            <Divider horizontal inverted>{this.props.author.username}</Divider>
              {
                this.props.posts.map(post => {
                  return ( <div id="fullWide" key={post.id}>
                              <Grid.Row>
                                <Grid.Column  width={3}>
                                  <Header as='h2'>{post.title}</Header>
                                </Grid.Column>

                              </Grid.Row>

                              <Grid.Row centered>
                                {post.text}
                                <Divider/>
                              </Grid.Row>
                          </div> )
                })
            }

            </Grid>

       )
  }
}

export default ListPosts;
