import React, { Component } from 'react';

// Import CSS
import './layout.css'

import Header from '../../components/header/Header';

class Layout extends Component{
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default Layout;
