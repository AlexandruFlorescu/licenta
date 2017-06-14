import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import Main from './Main'

class App extends Component {

  render() {
    return (
            <div>
              <NavBar/>
              <Main/>
              {this.props.children}
            </div>
    )
  }

}
export default App
