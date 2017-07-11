import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  position: fixed;
  height:5vh;
`;

class Foter extends Component {
  render() {
    return (
      <Footer>

          Icons made by <a href="http://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

      </Footer>

    )
  }

}


export default Foter
