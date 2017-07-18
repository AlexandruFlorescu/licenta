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

import Auth from './Auth'
const auth = new Auth();

class App extends Component {

  componentDidMount(){

    auth.getManagementToken();
    // window.addEventListener('beforeunload', auth.logout(true))
  }

  componentWillUnmount(){
    // window.removeEventListener('beforeunload', auth.logout);
  }

  render() {
      const theme={
        color: this.props.ui.color
      }
    return (
              <ThemeProvider theme={theme}>
                <div className="app">
                  <NavBar states={{auth:auth}} actions={{changeColor:this.props.actions.changeColor, logOff:this.props.actions.logOff}}/>
                  <Main props={this.props} auth={auth}/>
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
