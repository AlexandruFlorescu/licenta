//externals
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import styled from 'styled-components';
import { lighten } from 'polished'
import update from 'immutability-helper';
import cloneDeep from 'lodash'

//internals
import Button from './Button/Button';
import Input from './Input/Input';
import StrippedContainer from './StrippedContainer/StrippedContainer';
import Callback from './Callback/Callback';

//SVGs
import Role from '../assets/role.svg';
import Honor from '../assets/honor.svg';
import Crew from '../assets/crew.svg';
import Age from '../assets/age.svg';
import Tool from '../assets/tool.svg';
import Reputation from '../assets/carma.svg';

//things that should have been declared someplace else :3
const FlexWrapper = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  `;
const BottomWrapper = styled.div`
  display: flex;
  height: calc(85% - 250px);
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

  const Divider = styled.div`
    width:100%;
    height:1px;
    background: ${props=>props.theme.color};
  `;

  const Properties = styled.div``;

  const Textarea = styled.textarea`
  width:95%;
  height:85%;
  resize: none;
  `;

class UserProfileContainer extends Component{
  constructor(props){
    console.log('UserProfileContainer:constructor');
    super(props);
    this.state={
      editing: false,
      nickname: 'JohnDoe',
      crew: 'a',
      role: 'a',
      tools: 'a',
      honor: 'a',
      reputation: 'a',
      description: 'a',
    }
  }

  componentWillMount(){
    console.log('UserProfileContainer:componentDidMount');
    if(this.props.authed.user_metadata){
      this.setState({nickname: this.props.authed.nickname});
      this.setState({picture: this.props.authed.picture});
      this.setState({crew: this.props.authed.user_metadata.crew});
      this.setState({role: this.props.authed.user_metadata.role});
      this.setState({tools: this.props.authed.user_metadata.tools});
      this.setState({honor: this.props.authed.user_metadata.honor});
      this.setState({reputation: this.props.authed.user_metadata.reputation});
      this.setState({description: this.props.authed.user_metadata.description});
    }
  }

  edit(){
    console.log('UserProfileContainer:toggleEdit');
    this.setState({editing:true});
  }
  save(){
    console.log('UserProfileContainer:save');
    this.setState({editing:false});
    this.props.actions.updateUser(this.props.authed.user_id,{user_metadata:{
      crew: this.state.crew,
      role: this.state.role,
      tools: this.state.tools,
      honor: this.state.honor,
      reputation: this.state.reputation,
      description: this.state.description,
    }});
    // console.log();
    // console.log(this.props);
  }

  handleChange(name, e){
    console.log(this.state);
    this.setState({[name]: e.target.value});
    console.log(this.state);
  }

  render(){
    // console.log('UserProfileContainer:render');
    if(!this.props.authed.user_metadata)
      return <Callback></Callback>
    else
    { return (
      <StrippedContainer header={this.state.nickname} className="half">
        <FlexWrapper>
          <Img src={this.state.picture}>
            <div className='glow'>
            </div>
          </Img>
          <Properties>
            <Header> <Label background={Crew}> Crew:</Label>
              {this.state.editing
                ?  <Input className='ofForm' name='crew' value={this.state.crew} onChange={this.handleChange.bind(this, 'crew')}/>
                :  <Highlight>{this.state.crew}</Highlight>
              }
            </Header>
            <Header> <Label background={Role}> Role:</Label>
              {this.state.editing
                ?  <Input className='ofForm' name='role' value={this.state.role} onChange={this.handleChange.bind(this, 'role')}/>
                :  <Highlight>{this.state.role}</Highlight>
              }
            </Header>
            <Header> <Label background={Tool}> Tools:</Label>
              {this.state.editing
                ?  <Input className='ofForm' name='tools' value={this.state.tools} onChange={this.handleChange.bind(this, 'tools')}/>
                :  <Highlight>{this.state.tools}</Highlight>
              }
            </Header>
            <Header> <Label background={Honor}> Honor:</Label>
              {this.state.editing
                ?  <Input className='ofForm' name='honor' value={this.state.honor} onChange={this.handleChange.bind(this, 'honor')}/>
                :  <Highlight>{this.state.honor}</Highlight>
              }
            </Header>
            <Header> <Label background={Reputation}> Reputation:</Label>
              {this.state.editing
                ?  <Input className='ofForm' name='reputation' value={this.state.reputation} onChange={this.handleChange.bind(this, 'reputation')}/>
                :  <Highlight>{this.state.reputation}</Highlight>
              }
            </Header>
            {this.state.editing
               ? <Button onClick={this.save.bind(this)}> Save! </Button>
               : <Button onClick={this.edit.bind(this)}> Edit! </Button>
           }
          </Properties>
        </FlexWrapper>
        <Divider></Divider>
        <BottomWrapper>
          {this.state.editing
            ? <Textarea name='description' value={this.state.description} onChange={this.handleChange.bind(this, 'description')}></Textarea>
            : <p>
                {this.state.description}
              </p>
          }
        </BottomWrapper>
      </StrippedContainer>
    )}
  }
}
export default UserProfileContainer;
