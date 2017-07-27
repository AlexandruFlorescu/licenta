import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default (props) =>
  {
    const Input = styled.input`

    	padding: 5px 10px;
      border: 1px solid #999;
      border-radius: 3px;
      display: block;
      margin-bottom: 10px;
      box-sizing: border-box;
      width: 100%;

    &:focus{
      outline: none !important;
      border: 1px solid ${props => props.theme.color};
    }
`;

    return (<Input {...props}/>)
  };
