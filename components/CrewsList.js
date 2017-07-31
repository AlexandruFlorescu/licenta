//externals
import React, {Component} from 'react'
import styled from 'styled-components'

//internals
import CrewCard from './CrewCard'

//stuff I should have declared someplace else
const DashboardWrapper= styled.div`
  width: 95%;
  height: 95%;
  margin-left:101px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
  border: 1px solid red;
  `;

class CrewsList extends Component{
  constructor(props){
    super(props);
    this.state = {crews: []};
  }

  render(){
    console.log(this.props.crews);
    return (
      <DashboardWrapper>
          {this.props.crews}
      </DashboardWrapper>
    )
  }
}

export default CrewsList
