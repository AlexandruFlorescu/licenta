import React, {Component} from 'react';
import styled from 'styled-components';

const TicksTray = styled.div`
  margin: 10px;
  display:flex;
  justify-content: center;
`;

const ColorTick = styled.div`
  width:10px;
  height: 10px;
  margin: 1px;
  border: 1px solid black;
  background-color: ${props => props.color}
`;

const Header = styled.h3`
  letter-spacing: 0.1em;
  font-size: 16px;
  text-align: center;
  color: ${props=>props.theme.color};
`;

const Wrapper = styled.div`
  background-color: white;
  text-decoration: none;
  width:100px;
  height:77px;
  color: ${props => props.theme.color};;
  background-color:white;
  box-shadow: 0px 3px 3px 2px rgba(0,0,0,.3);
  border-top: 15px solid ${props => props.theme.color};

`;

class ColorTicks extends Component{
  constructor(props){
    super(props);
  }

  changeColor(color){
    this.props.changeColor(color);
  }

  render(){
    return (
      <Wrapper>
        <TicksTray>
          <ColorTick color='blue' onClick={()=>this.changeColor('blue')}></ColorTick>
          <ColorTick color='green' onClick={()=>this.changeColor('green')}></ColorTick>
          <ColorTick color='brown' onClick={()=>this.changeColor('brown')}></ColorTick>
          <ColorTick color='orangered' onClick={()=>this.changeColor('orangered')}></ColorTick>
          <ColorTick color='#FF5992' onClick={()=>this.changeColor('#FF5992')}></ColorTick>
          <ColorTick color='indigo' onClick={()=>this.changeColor('indigo')}></ColorTick>
          <ColorTick color='black' onClick={()=>this.changeColor('black')}></ColorTick>

        </TicksTray>
        <Header>Color?</Header>
      </Wrapper>
    )
  }
}

export default ColorTicks;
