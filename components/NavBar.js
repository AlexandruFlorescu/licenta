import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Segment, Menu, Button} from 'semantic-ui-react'

class NavBar extends Component{

  render(){
    return (
      <Menu size='massive'>
        <Menu.Item as={Link} to="/" name='Home' >Home</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/userProfile" name='My Profile'>My Profile</Menu.Item>
          <Menu.Item as={Link} to="/signUp" name='Sign Up'>
            <Button primary>Sign UP!</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }

}

export default NavBar
