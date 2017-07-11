import React, { Component } from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actionCreators'
import {ThemeProvider} from 'styled-components'
require('./../client/style.css');




class App extends Component {


  render() {
      const theme={
        color: this.props.ui.color
      }
    return (
              <ThemeProvider theme={theme}>
                <div className="app">
                  <NavBar authed={this.props.authed} logOff={this.props.actions.logOff} changeColor={this.props.actions.changeColor}/>
                  <Main props={this.props}/>
                  {this.props.children}
                  <Footer> </Footer>
                </div>
              </ThemeProvider>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
