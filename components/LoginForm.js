import React, {Component} from 'react';
import {Grid, Label, Input, Button} from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

   handleChange(e, {name, value}){
     this.state[name] = value;
   }

  handleSubmit(){
    console.log(this.state);
    this.props.loginUser(this.state)
  }

  render(){
    return (

    <Grid centered divided>
      <Grid.Row color='blue' inverted>
        <Grid.Column width={2}>
          <Label size="big" color='blue' inverted> Username: </Label>
        </Grid.Column>
        <Grid.Column width={6}>
          <Input name="username" placeholder="Username"  onChange={this.handleChange.bind(this)} fluid/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row color='blue' inverted>
        <Grid.Column width={2}>
          <Label size="big" color='blue' inverted> Password: </Label>
        </Grid.Column>
        <Grid.Column width={6}>
          <Input name="password" placeholder="Password" type='password' onChange={this.handleChange.bind(this)} fluid/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row color='blue'> <Button primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button> </Grid.Row>
    </Grid>

  )}
}

export default LoginForm;
