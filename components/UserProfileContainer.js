import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {Redirect} from 'react-router';
import StrippedContainer from './StrippedContainer/StrippedContainer';
import styled from 'styled-components';
import { lighten } from 'polished'
import Role from '../assets/role.svg';
import Honor from '../assets/honor.svg';
import Crew from '../assets/crew.svg';
import Age from '../assets/age.svg';
import Tool from '../assets/tool.svg';
import Reputation from '../assets/carma.svg';

const FlexWrapper = styled.div`
  display: flex;
  flex:1
  `;

const Img = styled.div`
  background: url(${props=>props.src}) 50% 50% no-repeat;
  background-size: cover;
  width:  250px;
  height: 250px;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, inset -7px -2px 20px 10px rgba(255,255,255,.4);
  border-radius:50%;
  display: inline;

  transition: all 0.6s ease-in-out;
  transform-style: preserve-3d;`;

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

  const Properties = styled.div`
  `;

class UserProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <StrippedContainer header={this.props.authed.nickname} className="half">
        <FlexWrapper>
          <Img src={this.props.authed.picture}>
            <div className='glow'>
            </div>
          </Img>
          <Properties>
            <Header> <Label background={Crew}> Crew:</Label> <Highlight>{this.props.authed.user_metadata.crew}</Highlight> </Header>
            <Header> <Label background={Role}> Role:</Label> <Highlight>{this.props.authed.user_metadata.role}</Highlight></Header>
            <Header> <Label background={Tool}> Tools:</Label> <Highlight>{this.props.authed.user_metadata.tools}</Highlight></Header>
            <Header> <Label background={Honor}> Honor:</Label> <Highlight>{this.props.authed.user_metadata.honor}</Highlight> </Header>
            <Header> <Label background={Reputation}> Reputation:</Label> <Highlight>{this.props.authed.user_metadata.reputation}</Highlight></Header>
          </Properties>
        </FlexWrapper>
        <FlexWrapper>
          <p>
            Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii 60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.
          </p>
        </FlexWrapper>
      </StrippedContainer>
    )
  }
}
export default UserProfileContainer;
