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


class CrewProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <StrippedContainer header='mere' className="half">

      </StrippedContainer>
    )
  }
}
export default CrewProfileContainer;
