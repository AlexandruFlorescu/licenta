import React, {Component} from 'react'
import styled from 'styled-components';
import Button from './Button/Button';
import StrippedContainer from './StrippedContainer/StrippedContainer';
import Header from './Header/Header';
import Input from './Input/Input';

const Label = styled.label`
  font-size: 135%;
  color: ${props => props.theme.color};
  `;

const RegisterWrapper = styled.div`
  height: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  padding: 0px 10px;
  `;

class RegisterForm extends Component{
  constructor(props){
    super(props)
    this.state={
      user: { username: '',
              email: '',
              password: '',
              confirmPassword: ''},

      errors: [],
      displayErrors: false,
      beenSubmited: false,
    }
  }

 valid(){
      this.state.errors = []
      var validator = require('validator')
      if(this.state.username == '')
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


 handleChange(e){
   this.state.user[e.target.name]= e.target.value;
  //  this.valid();
  //  this.setState({beenSubmited:false})
   console.log(this.state);
 }
 handleSubmit(e){
   e.preventDefault();
   this.props.actions.addUser(this.state.user);
  //  if( this.state.errors.length < 1){
  //  }
  //  else {
  //    this.setState({displayErrors: true});
  //    this.setState({beenSubmited: true});
  //  }
 }

 render(){

   console.log(this);
  return (
    <StrippedContainer header="Join the fun! :)">

        <RegisterWrapper>
          <Label> Username: </Label>
          <Input name="username" onChange={this.handleChange.bind(this)}/>

          <Label> Password: </Label>
          <Input name="password" type="password" onChange={this.handleChange.bind(this)}/>
          <Label> Confirm: </Label>
          <Input name="confirmPassword" type="password" onChange={this.handleChange.bind(this)}/>
          <Label> Email: </Label>
          <Input name="email" onChange={this.handleChange.bind(this)}/>


          <Button onClick={this.handleSubmit.bind(this)}>Register</Button>
        </RegisterWrapper>

    </StrippedContainer>
  )
 }

}

export default RegisterForm;
