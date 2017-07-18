import React, {Component} from 'react'
import {TextArea, Grid, Input, Button, Confirm} from 'semantic-ui-react'
import jwt_decode from 'jwt-decode'

class WritePost extends Component{
  constructor(props){
    super(props)

    this.state={
      title: '',
      text: '',
      author: jwt_decode(this.props.authed.token)._doc._id,
      open: false,
    }
  }

  handleChange(e, {name, value}){
    this.setState({[name] : value});
      }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ open: false })
    this.props.sendPost(this.state, this.props.authed.token);
  }

  show() {this.setState({ open: true })}
  handleCancel() {this.setState({ open: false })}

  render(){

      return (
        <div>
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel.bind(this)}
          onConfirm={this.handleSubmit.bind(this)}
        />
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input name='title' placeholder='title' onChange={this.handleChange.bind(this)} fluid/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <TextArea name='text' rows='10' placeholder="soo, what's on your mind today?:)" onChange={this.handleChange.bind(this)}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button primary inverted onClick={this.show.bind(this)}> Send! </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
        )
   }
}

export default WritePost
