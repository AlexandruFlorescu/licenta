import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import PostDetail from './PostDetail';


class ListPosts extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.posts);
    return(
        <ul>
          {
            this.props.posts.map(post => {
              return <PostDetail post={post}/>
            })
        }
        </ul>
       )
  }
}

export default ListPosts;
