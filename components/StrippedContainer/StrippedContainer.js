import React, {Component} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const StrippedContainer = styled.div`
height: 95vh;
width: 90%;
margin-left:101px;
display: inline;
background-color: white;
box-shadow: 0px 5px 5px 3px rgba(0,0,0,0.3);
border-radius: 5px;

> .upperStrip{
  height: 18.14vh;
  width: 100%;
  background-color: ${props => props.theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const StripHeader = styled.div`
text-spacing: 0.22em;
color: white;
font-size: 175%;
font-weight:500;
`;/* perhaps add this as header on the stripped line */
export default (props) =>
  {
    return (
      <StrippedContainer {...props}>
        <div className="upperStrip">
          <StripHeader>{props.header}</StripHeader>
        </div>
        {props.children}
      </StrippedContainer>)
  };
