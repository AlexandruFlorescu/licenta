//externals
import React, { Component } from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ThemeProvider} from 'styled-components'

//internals
import actions from '../redux/actionCreators'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
require('./../client/style.css');

import Auth from './Auth'
const auth = new Auth();

class App extends Component {

  componentDidMount(){
    auth.getManagementToken();
  }

  render() {
    const theme={
      color: this.props.ui.color
    }
    return (
          <ThemeProvider theme={theme}>
            <div className="app">
              <NavBar auth={auth} actions={{changeColor:this.props.actions.changeColor, logOff:this.props.actions.logOff}}/>
              <Main {...this.props} auth={auth}/>
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

//{this.props.children}
