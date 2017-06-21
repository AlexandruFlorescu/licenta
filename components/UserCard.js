import React, {Component} from 'react'
import {Card, Header, Image, Icon} from 'semantic-ui-react'
class UserCard extends Component{

  render(){
      return (
          <Card>
            <Image src={require('./../assets/matthew.png')}/>
            <Card.Content>
              <Card.Header>
                {this.props.user.username}
              </Card.Header>
              <Card.Meta>
                <a>
                  <Icon name='user'/>

                </a>
              </Card.Meta>
              <Card.Description>
                {this.props.user.email}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
          </Card>
        )

          }
}

export default UserCard
