import React, {Component} from 'react'
import {Grid, Header, Image, Icon} from 'semantic-ui-react'
import UserCard from './UserCard'

class UserList extends Component{

  render(){
    return (
    <Grid columns={3} centered divided>
      <Grid.Row>
        {this.props.users.map(user => {
          return <Grid.Column key={user.id} width={3}>
                    <UserCard user={user}/>
                 </Grid.Column>
        })}
      </Grid.Row>
    </Grid>)

  }
}

export default UserList
