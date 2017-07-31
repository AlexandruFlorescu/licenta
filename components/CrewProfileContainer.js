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
  width: 130px;
  height: 130px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  border-radius:50%;
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
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
  align-items: flex-end;
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
  width: 22px;
  height: 22px;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  `;

const Header = styled.h2`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  `;

const Column = styled.ul`
  width: 50%;
  height: auto;
  &:nth-child(1){
    border-right: 2px solid ${props=>props.theme.color};
  }
  `;

const Block = styled.li`
  display: inline-block;
  width: 100%;
  height: 15%;
  &:nth-child(1){
    border-bottom: 2px solid ${props=>props.theme.color};
  }
`;

const Table = styled.table`
width: 100%;
height: 100%;
`;

const Tr = styled.tr`
  &:nth-child(even){
    background: ${props=>lighten(0.4,props.theme.color)};
  }
`;

const Th = styled.th`
  background: ${props=>props.theme.color};
  border: 1px solid black;
`;

const Td = styled.td`
  text-align: center;
  vertical-align: middle;
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
            <Table>
              <Tr>
                <Th>Role</Th>
                <Th>Name</Th>
                <Th>Tools</Th>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
              <Tr>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
                <Td>HTML5</Td>
              </Tr>
            </Table>
        </BottomWrapper>
      </StrippedContainer>
    )
  }
}
export default CrewProfileContainer;
