import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import UserInfo from './UserInfo'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SidebarLeftOverlay extends Component {
  constructor(props, context){
    super(props, context)
    this.state = { visible: false }

  }

  toggleVisibility() {this.setState({ visible: !this.state.visible })}

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <div>
                <UserInfo actions={this.props.actions} user={this.props.user}/>
                <TodoInput addTodo={this.props.actions.addTodo}/>
                <TodoList actions={this.props.actions} todos={this.props.todos}/>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarLeftOverlay)
