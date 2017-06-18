import React, {Component} from 'react'
import {Grid, Header, Image, Icon} from 'semantic-ui-react'
import UserInfo from './UserInfo'

class UserList extends Component{

  render(){
    return (
    <Grid columns={3} centered divided>
      <Grid.Row>
        {this.props.users.map(user => {
          return <Grid.Column width={3}><UserInfo authed= {user}/></Grid.Column>
        })}
      </Grid.Row>
    </Grid>)

  }
}

export default UserList