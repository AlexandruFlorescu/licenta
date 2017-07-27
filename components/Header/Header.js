import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

  const Header = styled.h1`
  text-transform: uppercase;
  font-size: 175%;
  font-weight: 300;
  text-align: center;
  padding-left: 5px;
  margin:25px 0;
  color: ${props => props.theme.color};`;
export default (props) =>
{

    return (<Header>{props.children}</Header>)
  };
