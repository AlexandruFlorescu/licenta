import React, {Component} from 'react';
import {Redirect} from 'react-router';
import styled from 'styled-components';
import Button from './Button/Button';
import StrippedContainer from './StrippedContainer/StrippedContainer';
import Header from './Header/Header';
import Input from './Input/Input';

const Label = styled.label`
  font-size: 135%;
  color: ${props => props.theme.color};
`;

const LoginWrapper = styled.div`
  height: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  padding: 0px 10px;
  `;

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',

      errors: [],
      displayErrors: false,
      beenSubmited: false,

    }
  }

  handleLoginChange(e, {name, value}){
     this.state[name] = value;
   }

  handleLoginSubmit(){
    this.props.actions.loginUser(this.state)
  }

  render(){

    if(this.props.states.authed.token!=null)
      {return <Redirect push to='/userProfile'/>;}
    else
      {return (
          <StrippedContainer header='Welcome back! :)'>
              <LoginWrapper>
                  <Label> Username: </Label>
                  <Input name="username" onChange={this.handleLoginChange.bind(this)}/>

                  <Label> Password: </Label>
                  <Input name="password" type="password" onChange={this.handleLoginChange.bind(this)}/>

                  <Button>Login</Button>
              </LoginWrapper>
          </StrippedContainer>
  )}
  }
}

export default LoginForm;
