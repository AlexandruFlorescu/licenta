import React, {Component} from 'react'
import StrippedCard from './StrippedCard'
import styled from 'styled-components'
//
// const spin = keyframes`
// 	from { transform: rotate(0deg); }
// 	to { transform: rotate(360deg); }
// `;


const Img = styled.div`
  background: url(${props=>props.src}) 50% 50% no-repeat;
  background-size: cover;
  width:  35%;
  height: 35%;
  clip-path: circle(50% at center);
  shape-outside: circle(50%);
  box-shadow: inset 0px 0px 5px 2px ${props=> props.theme.color}, -7px -2px 20px 10px rgba(255,255,255,0.4);
  border-radius:50%;
  float: left;
`;

const IImg = styled.img`
  object-fit: cover;
  width:130px;
  height:130px;
  clip-path: circle(25px at center);
`;

class UserCard extends Component{

  render(){
    var image = require('./../assets/matthew.png');
      return (
          <StrippedCard header={this.props.user.username}>
            <Img src={image} ><div className='glow'></div></Img>

          </StrippedCard>
        )

  }
}

export default UserCard
//  './../assets/matthew.png' this.props.user.image
