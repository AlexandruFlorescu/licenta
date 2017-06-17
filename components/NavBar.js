import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Segment, Icon, Menu, Button} from 'semantic-ui-react'

class NavBar extends Component{


  render(){

    return (
      <Menu size='massive'>
        <Menu.Item as={Link} to="/" name='Home' >Home</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/userProfile">  My profile </Menu.Item>
          <Menu.Item >
            <Button as={Link} to="/signUp" name='Sign Up' primary>Sign UP!</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }

}

export default NavBar
