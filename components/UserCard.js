import React, {Component} from 'react'
import StrippedCard from './StrippedCard'
import styled from 'styled-components'
import { lighten } from 'polished'
import Role from '../assets/role.svg';
import Honor from '../assets/honor.svg';
import Crew from '../assets/crew.svg';
import Age from '../assets/age.svg';
import Tool from '../assets/tool.svg';
import Reputation from '../assets/carma.svg';

const Img = styled.div`
  background: url(${props=>props.src}) 50% 50% no-repeat;
  background-size: cover;
  width:  150px;
  height: 150px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
  border-radius:50%;
  display: inline;

  transition: all 0.6s ease-in-out;
  transform-style: preserve-3d;
`;


const Header = styled.h3`
  color: ${props=>props.theme.color};
  font-weight: 700;
  text-align:center;
  width:100%;
  line-height: 30px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props=>props.theme.color};
`;



const Label = styled.label`
  color: black;
  width: 125px;
  float: left;

  &:before{
    content: 'zzz';
    color: transparent;
    background: url(${props=>props.background}) no-repeat 50% 50%;
    background-size: 20px;
    width:30px;
    height:30px;
  }
`;

const Highlight = styled.span`
  border: 1px solid ${props=>props.theme.color};
  background-color: ${props=> lighten(0.4, props.theme.color)};
`;

class UserCard extends Component{

  render(){
    var image = require('./../assets/matthew.png');
      return (
          <StrippedCard header={this.props.user.username}>
            <CardWrapper>
              <Img src={image}>
                <div className='glow'>
                </div>
              </Img>
              <Divider/>
              <Header> <Label background={Crew}> Crew:</Label> <Highlight>{this.props.user.crew}</Highlight> </Header>
              <Header> <Label background={Role}> Role:</Label> <Highlight>{this.props.user.role}</Highlight></Header>
              <Header> <Label background={Tool}> Tools:</Label> <Highlight>{this.props.user.favTool}</Highlight></Header>
              <Header> <Label background={Honor}> Honor:</Label> <Highlight>{this.props.user.honor}</Highlight> </Header>
              <Header> <Label background={Reputation}> Reputation:</Label> <Highlight>{this.props.user.reputation}</Highlight></Header>
            </CardWrapper>
          </StrippedCard>
        )

  }
}

export default UserCard
//  './../assets/matthew.png' this.props.user.image
