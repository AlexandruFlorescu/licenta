import React, {Component} from 'react'
import { Grid, Button,Input, Label } from 'semantic-ui-react'

class RegisterForm extends Component{
constructor(props){
  super(props)
  this.state={
    user : {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    errors: [],
    displayErrors: false,
    beenSubmited: false,
  }
}


 valid(){
      this.state.errors = []
      var validator = require('validator')
      if(this.state.user.username == '')
        this.state.errors.push('Username cannot be empty');
      if(this.props.users.find(user => user.username == this.state.user.username))
        this.state.errors.push('Username is already taken');

      if(this.state.user.email == '')
        this.state.errors.push('Email cannot be empty');
      if(!validator.isEmail(this.state.user.email))
        this.state.errors.push('This is not an email');
      if(this.props.users.find(user => user.email == this.state.user.email))
        this.state.errors.push('Email is already taken');

      if(this.state.user.password.length < 5)
          this.state.errors.push('Password must have at least 6 characters');
      if(this.state.user.confirmPassword != this.state.user.password)
          this.state.errors.push("Passwords don't match");

      if(this.state.errors.length <1)
        this.setState({displayErrors:false});
      else this.setState({displayErrors:true});
      }


 handleChange(e, {name, value}){
   this.state.user[name] = value;
   this.valid();
   this.setState({beenSubmited:false})

 }


 handleSubmit(e){
   e.preventDefault();
   if( this.state.errors.length < 1){
     this.props.addUser(this.state.user)
   }
   else {
     this.setState({displayErrors: true});
     this.setState({beenSubmited: true});
   }
 }

 render(){
  return (
      <Grid centered divided>
        <Grid.Row style={{visibility: this.state.displayErrors ? 'visible' : 'hidden'}}>
          <Grid.Column color={this.state.beenSubmited ? 'red' : 'yellow'}>
            <ul type='none'>
              {
                this.state.errors.map((error) => {
                    return <li > {error} </li> })
              }
            </ul>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='blue'>
        {/* Username */}
          <Grid.Column width={2}>
            <Label size="big" color='blue' inverted> Username: </Label>
          </Grid.Column>
          <Grid.Column width={6}>
            <Input name="username" placeholder="Username"  onChange={this.handleChange.bind(this)} fluid/>
          </Grid.Column>
        </Grid.Row>
        {/* Email */}
        <Grid.Row color='blue'>
          <Grid.Column width={2}>
            <Label size="big" color='blue' inverted> Email: </Label>
          </Grid.Column>
          <Grid.Column width={6}>
            <Input name="email" placeholder="Email" type="email" onChange={this.handleChange.bind(this)} fluid/>
          </Grid.Column>
        </Grid.Row>
        {/* Password */}
        <Grid.Row color='blue'>
          <Grid.Column width={2}>
            <Label size="big" color='blue' inverted> Password: </Label>
          </Grid.Column>
          <Grid.Column width={6}>
            <Input name="password" placeholder="Password" type="password" onChange={this.handleChange.bind(this)} fluid/>
          </Grid.Column>
        </Grid.Row>
        {/* Confirm Password */}
        <Grid.Row color='blue'>
          <Grid.Column width={2}>
            <Label size="big" color='blue' inverted> Confirm: </Label>
          </Grid.Column>
          <Grid.Column width={6}>
            <Input name="confirmPassword" placeholder="Password" type="password" onChange={this.handleChange.bind(this)} fluid/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='blue'> <Button primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button> </Grid.Row>
      </Grid>
  )
 }

}

export default RegisterForm;
