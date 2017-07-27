import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default (props) =>
  {

    const UserStripe = styled.div`
      border: 1px solid red;
    `;

    return (
      <UserStripe {...props}>
        <img src={props.Img}></img>
        Role: {props.Role + '/n' + props.Name}
      </UserStripe>)
  };
