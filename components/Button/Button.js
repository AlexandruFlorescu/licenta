import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default (props) =>
  {
    const Button = styled.button`
      width:100%;
      color: ${props => props.theme.color};
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      letter-spacing: .1em;
      border-radius: 7px;
      border: 1px solid ${props => props.theme.color};
      background-color: white;
      margin-top: 5px;
      box-shadow: 0px 17px 10px -10px rgba(0,0,0,.33);
      transition-property: background-color;
      transition-duration: 0.5s;
      transition-timing-function: ease-out;

      &:hover {
        background-color: ${props => props.theme.color};
        color:white;
      }

      &:active{
        color: white;
        background-color: ${props => props.theme.color};
        box-shadow: inset 1px 1px 3px 2px rgba(0, 0, 0, .3);
      }
      `;
    return (<Button {...props}>{props.children}</Button>)
  };
