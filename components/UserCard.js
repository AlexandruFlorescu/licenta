//externals
import React, {Component} from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

//internals
import StrippedCard from './StrippedCard'

//SVGs
import Role from '../assets/role.svg';
import Honor from '../assets/honor.svg';
import Crew from '../assets/crew.svg';
import Age from '../assets/age.svg';
import Tool from '../assets/tool.svg';
import Reputation from '../assets/carma.svg';

//stuff that I should have declared someplace else
const Img = styled.div`
  background: url(${props=>props.src}) 50% 50% no-repeat;
  background-size: cover;
  width:  97.2px;
  height: 97.2px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
  border-radius:50%;
  float: left;

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

const UpperWrap = styled.div`
    height: 100px;
`;
const RightWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
`;

const Highlight = styled.span`
  border: 1px solid ${props=>props.theme.color};
  background-color: ${props=> lighten(0.4, props.theme.color)};
  `;

class UserCard extends Component{

  render(){
    console.log(this.props.crews);
      return (
          <StrippedCard header={this.props.user.nickname}>
            <UpperWrap>
              <Img src={this.props.user.picture}></Img>
              <RightWrap>
                <Header> <Label background={Honor}> Honor:</Label> <Highlight>{this.props.user.user_metadata.honor}</Highlight> </Header>
                <Header> <Label background={Reputation}> Reputation:</Label> <Highlight>{this.props.user.user_metadata.reputation}</Highlight></Header>
              </RightWrap>
            </UpperWrap>
            <Divider></Divider>
            <CardWrapper>

                <Header> <Label background={Crew}> Crew:</Label> <Highlight>{this.props.crews.find(crew => crew._id == this.props.user.user_metadata.crew) ? this.props.crews.find(crew => crew._id == this.props.user.user_metadata.crew).name : 'none'}</Highlight> </Header>
                <Header> <Label background={Role}> Role:</Label> <Highlight>{this.props.user.user_metadata.role}</Highlight></Header>
                <Header> <Label background={Tool}> Tools:</Label> <Highlight>{this.props.user.user_metadata.tools}</Highlight></Header>
            </CardWrapper>
          </StrippedCard>
        )
  }
}
export default UserCard
