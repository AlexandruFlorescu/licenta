import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

class PostDetail extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.post);
    return(
    <li>{this.props.post.text}</li> )
  }
}

export default PostDetail;
