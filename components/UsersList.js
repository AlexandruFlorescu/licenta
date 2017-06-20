import React, {Component} from 'react'
import {Grid, Header, Image, Icon} from 'semantic-ui-react'
import UserInfo from './UserInfo'

class UserList extends Component{

  render(){
    console.log(this.props.users);
    return (
    <Grid columns={3} centered divided>
      <Grid.Row>
        {this.props.users.map(user => {
          return <Grid.Column key={user.id} width={3}>
                    <UserInfo user={user} authed={this.props.authed}/>
                 </Grid.Column>
        })}
      </Grid.Row>
    </Grid>)

  }
}

export default UserList
