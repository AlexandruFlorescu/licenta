//External
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

//Internal
import NavButton from './Button/NavButton'
import ColorTicks from './ColorTicks'

//SVGs
import Home from '../assets/home.svg';
import Login from '../assets/login.svg';
import Contact from '../assets/contact.svg';
import Profile from '../assets/profile.svg';
import Carma from '../assets/carma.svg';

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  `;
const Divider = styled.div`
  height: 15px;
  width: 100%;
  `;
const MyLink = styled(Link)`
  text-decoration: none;
  width:100px;
  height:77px;
  color: ${props => props.theme.color};
  background-color:white;
  box-shadow: 0px 3px 3px 2px rgba(0,0,0,.3);
  `;

class NavBar extends Component{
  logOut(){
    console.log('logOut');
    this.props.actions.logOff();
    this.props.auth.logout();
  }
  logIn(){
    this.props.auth.login();
  }
  render(){
    return (
    <NavWrapper>
      <ColorTicks changeColor={this.props.actions.changeColor}></ColorTicks>
      {this.props.auth.isAuthenticated() && <Divider></Divider> }
      {this.props.auth.isAuthenticated() &&
         <MyLink to='/userProfile'><NavButton background={Profile}> Profile </NavButton> </MyLink> }
      <Divider></Divider>
        <MyLink to='/'> <NavButton background={Home}> Home </NavButton> </MyLink>
      <Divider></Divider>
        {this.props.auth.isAuthenticated() ? <MyLink to='#'><NavButton background={Login} onClick={this.logOut.bind(this)}> Logoff </NavButton> </MyLink>
      : <MyLink to='#'><NavButton background={Login} onClick={this.logIn.bind(this)}> Login </NavButton> </MyLink> }
      <Divider></Divider>
        <MyLink to='/crewsList'><NavButton background={Carma}> Crews </NavButton> </MyLink>
      <Divider></Divider>
        <MyLink to='/Contact'><NavButton background={Contact}> Contact </NavButton> </MyLink>
    </NavWrapper>
    )
  }
}
export default NavBar
