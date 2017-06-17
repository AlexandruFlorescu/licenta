import React, {Component} from 'react'
import {Card, Header, Image, Icon} from 'semantic-ui-react'

class UserInfo extends Component{

  render(){
    return (
    <Card>
      <Image src={require('./../assets/matthew.png')}/>
      <Card.Content>
        <Card.Header>
          {this.props.authed.username}
        </Card.Header>
        <Card.Meta>
          <a>
            <Icon name='user'/>
            {this.props.authed.crew}
          </a>
        </Card.Meta>
        <Card.Description>
          {this.props.authed.shortDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>

      // <Grid centered celled="internally">
      //   <Grid.Row >
      //     <Grid.Column width={4} color="blue">
      //       <Image src='/assets/images/unknown.png' size='medium' shape='rounded' />
      //     </Grid.Column>
      //     <Grid.Column width={4} color="blue">
      //       <Header as='h3'> {this.props.authed.username} </Header>
      //       <Header as='h3'> {this.props.authed.email} </Header>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>

    )
  }
}

export default UserInfo
