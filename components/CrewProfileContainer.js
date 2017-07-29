import React, {Component} from 'react';
import {Redirect} from 'react-router';
import styled from 'styled-components';
import { lighten } from 'polished'

import StrippedContainer from './StrippedContainer/StrippedContainer';
// import UserStripe from './UserStripe'

import Role from '../assets/role.svg';
import Honor from '../assets/honor.svg';
import Crew from '../assets/crew.svg';
import Age from '../assets/age.svg';
import Tool from '../assets/tool.svg';
import Reputation from '../assets/carma.svg';

const Img = styled.img`
  background-color: red;
  width: 250px;
  height: 250px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
  border-radius:50%;
  display: inline;
  `;

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  `;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:50%;
  padding: 5px;
  `;

const Divider = styled.div`
  width:100%;
  height:1px;
  background: ${props=>props.theme.color};
  `;

const SImg = styled.img`
  background-color: red;
  width: 20px;
  height: 20px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  border-radius:50%;
  display: float;
  margin-right: 5px;
  `;

const Header = styled.h2`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  `;

const Column = styled.ul`
  width: 50%;
  height: 100%;
  `;

const Block = styled.li`
  display: inline-block;
  width: 100%;
  height: 15%;
  border: 1px solid ${props=>props.theme.color};
`;


class CrewProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <StrippedContainer header='CrewName' className="half">
        <TopWrapper>
          <Img></Img>
          <div>
            <div>This is aa text</div>
            <div>This is a text</div>
            <div>This is a text</div>
            <div>This is a text</div>
            <div>This is a text</div>
          </div>
        </TopWrapper>
        <Divider></Divider>
        <BottomWrapper>
          <Column>
            <Block>
              <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                            <Header> CrewmemberName</Header> <br/>
            </Block>
            <Block>
              <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                            <Header> CrewmemberName</Header> <br/>
            </Block>
            <Block>
              <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                            <Header> CrewmemberName</Header> <br/>
            </Block>
            <Block>
              <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                            <Header> CrewmemberName</Header> <br/>
            </Block>
            <Block>
              <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                            <Header> CrewmemberName</Header> <br/>
            </Block>
          </Column>
          <Column>
            <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                          <Header> CrewmemberName</Header> <br/>
            <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                          <Header> CrewmemberName</Header> <br/>
            <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                          <Header> CrewmemberName</Header> <br/>
            <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                          <Header> CrewmemberName</Header> <br/>
            <SImg></SImg> <Header>Role: CrewMemberRole</Header> <br/>
                          <Header> CrewmemberName</Header> <br/>
          </Column>
        </BottomWrapper>
      </StrippedContainer>
    )
  }
}
export default CrewProfileContainer;
