import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import styled from 'styled-components'
import SidebarPostIt from './SidebarPostIt/SidebarPostIt'
import Button from './Button/Button'

const Wrapper = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const NavWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;`;

class NavBar extends Component{

  logOff(){
    this.props.logOff();
  }

  render(){
    // if(this.props.authed.token != null) {

        return (
          <Wrapper>
            <SidebarPostIt >
              <NavWrapper>
                <Link to='/'><Button> Home! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

            <SidebarPostIt>
              <NavWrapper>
                <Link to='/signIn'><Button> Login! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

            <SidebarPostIt>
              <NavWrapper>
                <Link to=''><Button> None! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

            <SidebarPostIt>
              <NavWrapper>
                <Link to=''><Button> None! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

            <SidebarPostIt>
              <NavWrapper>
                <Link to=''><Button> None! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

            <SidebarPostIt>
              <NavWrapper>
                <Link to='/signIn'><Button> Contact Us! </Button> </Link>
              </NavWrapper>
            </SidebarPostIt>

          </Wrapper>
        )
      }



}

export default NavBar
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import styled from 'styled-components'
import SidebarPostIt from './SidebarPostIt/SidebarPostIt'
import NavButton from './Button/NavButton'

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 5px;
  margin: 0 15px;
  border-right: 5px solid var(--orangered);
  `;

const Divider = styled.div`
  border-bottom: 1px solid var(--orangered);
  height: 1px;
  width: 100%;
  margin: 25px 0;
`;

class NavBar extends Component{

  logOff(){
    this.props.logOff();
  }

  render(){
        return (
          <Wrapper>
            <div className="orangeBorder"></div>
            <Wrapper>
                    <Divider></Divider>
                  <NavWrapper><Link to='/'><NavButton> Home! </NavButton> </Link></NavWrapper>
                    <Divider></Divider>
                  <NavWrapper><Link to='/signIn'><NavButton> Login! </NavButton> </Link></NavWrapper>
                    <Divider></Divider>
                  <NavWrapper><Link to='/signIn'><NavButton> Contact </NavButton> </Link></NavWrapper>
                    <Divider></Divider>
            </Wrapper>
          </Wrapper>
        )
      }
}

export default NavBar
