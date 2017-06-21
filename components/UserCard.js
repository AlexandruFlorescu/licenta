import React, {Component} from 'react'
import {Card, Header, Image, Icon} from 'semantic-ui-react'
class UserCard extends Component{

  render(){
    var image = require('./../assets/matthew.png');
      return (
          <Card centered>
            <Card.Header as='h3'>
              {this.props.user.username}
            </Card.Header>
            <Image src={image}/>
            <Card.Content>
              <Card.Meta>
                <a>
                  <Icon name='user'/>
                  {this.props.user.email}
                </a>
              </Card.Meta>
              <Card.Description>
                Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice.
                Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,
                când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru
                a crea o carte demonstrativă pentru literele respective.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
          </Card>
        )

          }
}

export default UserCard
//  './../assets/matthew.png' this.props.user.image
