//externals
import React, {Component} from 'react'
import styled from 'styled-components'

//internals
import CrewCard from './CrewCard'

//stuff I should have declared someplace else
const DashboardWrapper= styled.div`
  width: 90%;
  height: 95vh;
  margin-left:101px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
  `;

class CrewsList extends Component{
  constructor(props){
    super(props);
    this.state = {crews: []};
  }

  render(){
    return (
      <DashboardWrapper>
        {this.props.states.crews.map((crew)=>
          <CrewCard key={this.props.states.crews.indexOf(crew)} crew={crew} authed={this.props.states.authed} addUserToCrew={this.props.actions.addUserToCrew}/>)}
      </DashboardWrapper>
    )
  }
}

export default CrewsList
