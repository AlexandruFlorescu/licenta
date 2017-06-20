import React, {Component} from 'react'
import {Card, Header, Image, Icon} from 'semantic-ui-react'
import jwt_decode from 'jwt-decode'
class UserInfo extends Component{

  render(){
    if(this.props.authed != null)
       {
         if(this.props.authed.token!=null)
         {
          var decoded = jwt_decode(this.props.authed.token);
          return (
          <Card>
            <Image src={require('./../assets/matthew.png')}/>
            <Card.Content>
              <Card.Header>
                {decoded._doc.username}
              </Card.Header>
              <Card.Meta>
                <a>
                  <Icon name='user'/>
                  {decoded._doc.email}
                </a>
              </Card.Meta>
              <Card.Description>
                {this.props.authed.user.email}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
          </Card>)
        }
        else{
          return (<Header as='h2'> No token! Please log in! </Header>)
        }
  }
    else {
      return <Header as='h2'> Please log in! </Header>
    }
  }
}

export default UserInfo
