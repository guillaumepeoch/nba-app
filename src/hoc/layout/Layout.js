import React, { Component } from 'react';

// Import CSS
import './layout.css'

class Layout extends Component{
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
      <div>
        <header>
          Header
        </header>
          {this.props.children}
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default Layout;
