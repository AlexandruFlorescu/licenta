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

  handleLoginChange(e){
     this.state[e.target.name] = e.target.value;
     console.log(this.state);
   }

  handleLoginSubmit(){
    console.log(this.props.actions);
    this.props.states.auth.login();
  }

  render(){
    console.log(this.props.states);
    return (
          <StrippedContainer header='Welcome back! :)'>
              <LoginWrapper>
                  <Label> Username: </Label>
                  <Input name="username" onChange={this.handleLoginChange.bind(this)}/>

                  <Label> Password: </Label>
                  <Input name="password" type="password" onChange={this.handleLoginChange.bind(this)}/>

                  <Button onClick={this.handleLoginSubmit.bind(this)}>Login</Button>
              </LoginWrapper>
          </StrippedContainer>
        )
  }
}

export default LoginForm;
