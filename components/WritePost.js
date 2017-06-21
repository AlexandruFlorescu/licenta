import React, {Component} from 'react'
import {TextArea, Grid, Input, Button} from 'semantic-ui-react'
import jwt_decode from 'jwt-decode'

class WritePost extends Component{
  constructor(props){
    super(props)

    this.state={
      title: '',
      text: '',
      author: jwt_decode(this.props.authed.token)._doc._id,
    }
  }

  handleChange(e, {name, value}){
    this.setState({[name] : value});
      }

  handleSubmit(e){
    e.preventDefault();
    // console.log(this.props.authed.token);
    // this.setState({});
    // console.log(this.state);
    this.props.sendPost(this.state, this.props.authed.token);
  }

  render(){
      return (
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input name='title' placeholder='title' onChange={this.handleChange.bind(this)} fluid/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <TextArea name='text' autoHeight={true} placeholder="soo, what's on your mind today?:)" onChange={this.handleChange.bind(this)}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Button primary inverted onClick={this.handleSubmit.bind(this)}> Send! </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        )
   }
}

export default WritePost
