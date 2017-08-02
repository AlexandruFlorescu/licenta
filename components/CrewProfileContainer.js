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
import Contact from '../assets/contact.svg';

const Img = styled.img`
  background-color: ${props=> props.theme.color};
  width: 150px;
  height: 150px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  border-radius:50%;
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
  display: inline;
  float: left;
  `;

const TopWrapper = styled.div`
  display: flex;
  height: 29.36vh;
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
  height: 42.3vh;
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
  margin-right: 5px;
  margin-top: 5px;
  `;

const Table = styled.table`
  width: 100%;
  height: calc(42.3vh - 10px);
  border-collapse: collapse;
  overflow-y=scroll;
`;

const Tr = styled.tr`
  min-height : 35px;
  &:nth-child(even){
    background: ${props=>lighten(0.4,props.theme.color)};
  }
  &:nth-child(odd){
    background: ${props=>lighten(0.3,props.theme.color)};
  }
  &:hover {
    background-color: ${props=>props.theme.color};
    color: white;
  }
`;

const Th = styled.th`
  background: ${props=>props.theme.color};
  color: white;
  vertical-align: middle;
  border: 1px solid black;
`;

const Td = styled.td`
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;

`;

const Header = styled.h3`
  color: ${props=>props.theme.color};
  font-weight: 700;
  text-align:center;
  width:100%;
  line-height: 30px;
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


class CrewProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  changedSelectedUser(member) {
    this.props.changedSelectedUser(member);
  }

  render(){
    return (
      <StrippedContainer header={this.props.crews[0].name} className="half">
        <TopWrapper>
          <Img src={this.props.crews[0].image}></Img>
          <div>
            <Header> <Label background={Contact}> Email:</Label> <Highlight>{this.props.crews[0].email}</Highlight> </Header>
            <Header> <Label background={Honor}> Honor:</Label> <Highlight>{this.props.crews[0].honor}</Highlight></Header>
            <Header> <Label background={Reputation}> Reputation:</Label> <Highlight>{this.props.crews[0].reputation}</Highlight></Header>
          </div>
        </TopWrapper>
        <Divider></Divider>
        <BottomWrapper>
            <Table>
              <Tr>
                <Th>Link</Th>
                <Th>Role</Th>
                <Th>Name</Th>
              </Tr>
              {
                this.props.crews[0].users.map( (crewMemberId) =>
                  {let crewMember = this.props.users.find(user => user.user_id == crewMemberId);
                    return (<Tr>
                              <Td><SImg src={crewMember.picture} onClick={this.changedSelectedUser.bind(this, crewMember)} /></Td>
                              <Td>{crewMember.user_metadata.role}</Td>
                              <Td>{crewMember.nickname}</Td>
                            </Tr>)}
                )}
              <Tr>
                <Td><SImg src={require('./../assets/matthew.png')}/></Td>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
              </Tr>
              <Tr>
                <Td><SImg src={require('./../assets/matthew.png')}/></Td>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
              </Tr>
              <Tr>
                <Td><SImg src={require('./../assets/matthew.png')}/></Td>
                <Td>Captain</Td>
                <Td>Alexandru Florescu</Td>
              </Tr>
            </Table>
        </BottomWrapper>
      </StrippedContainer>
    )
  }
}
export default CrewProfileContainer;
