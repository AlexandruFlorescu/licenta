import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default (props) =>
  {
    const Button = styled.button`
    display: inline-block;
    text-decoration: none;
    outline: none;
    color: ${props => props.theme.color};
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    letter-spacing: .1em;
    border: none; /*1px solid var(--orange);*/
    size: 32px 32px;
    /*box-shadow: 0px 17px 10px -10px rgba(0,0,0,.33);*/
    transform-origin: left top;
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    width: 100px;
    background-color: white;
    border-top: 15px solid ${props => props.theme.color};

    &:hover {
      background-color: ${props => props.theme.color};
      color:white;
    }

    &:hover img{
      filter: invert(100%);
    }

    &:active{
      color: white;
      background-color: ${props => props.theme.color};
      box-shadow: inset 1px 1px 3px 2px rgba(0, 0, 0, .3);
    }

    &:after{
      background: url(${props.background});
      background-size: 27px;
    }
`;

  const Image = styled.img`
    width: 20px;
    height: 20px;

  `;
    return (<Button onClick={props.onClick}><Image src={props.background}></Image>{props.children}</Button>)
  };
