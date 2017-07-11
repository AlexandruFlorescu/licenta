import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import styled from 'styled-components'
import NavButton from './Button/NavButton'
import ColorTicks from './ColorTicks'
import Home from '../assets/home.svg';
import Login from '../assets/login.svg';
import Contact from '../assets/contact.svg';

const Wrapper = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 1px 2px rgba(0,0,0,.3);
  padding: 0 5px;

  > .orangeBorder{
  height: 10%;
  width: 100%;
  background-color: var(--orangered);
  box-shadow: inset 0px 7px 9px -7px rgba(0,0,0, .6);
  }
`;
const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  `;

const Divider = styled.div`

  margin-bottom: 11px;
  height: 5px;
  width: 100%;
`;

const Nav = styled.nav`
  background: var(--orangered);
  height: 25%;
  border-radius: 15px;
`;

const MyLink = styled(Link)`
  background-color: white;
  text-decoration: none;
  width:100%;
  height:77px;
  color: ${props => props.theme.color};;
  background-color:white;
  box-shadow: 0px 3px 3px 2px rgba(0,0,0,.3);

`;

class NavBar extends Component{

  logOff(){
    this.props.logOff();
  }

  render(){
        return (
          <NavWrapper>
            <ColorTicks changeColor={this.props.changeColor}></ColorTicks>

            <Divider></Divider>
              <MyLink to='/'> <NavButton background={Home}> Home </NavButton> </MyLink>
            <Divider></Divider>
              <MyLink to='/signIn'><NavButton background={Login}> Login </NavButton> </MyLink>
            <Divider></Divider>
              <MyLink to='/signUp'><NavButton background={Login}> Register </NavButton> </MyLink>
            <Divider></Divider>
              <MyLink to='/Contact'><NavButton background={Contact}> Contact </NavButton> </MyLink>
            <Divider></Divider>
              <MyLink to='/Contact'><NavButton background={Contact}> Contact </NavButton> </MyLink>
            <Divider></Divider>
              <MyLink to='/Contact'><NavButton background={Contact}> Contact </NavButton> </MyLink>
          </NavWrapper>
        )
      }
}

export default NavBar
