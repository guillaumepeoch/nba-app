import React, { Component } from 'react';

// Import CSS
import './layout.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class Layout extends Component{

  constructor(props) {
    super(props);
    this.state = {
      showNav:false
    };
  }

  toggleSideNav(navBool){
    this.setState({
      showNav:navBool
    });
  }

  render(){
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={()=>this.toggleSideNav(false)}
          onOpenNav={()=>this.toggleSideNav(true)}
          user={this.props.user}
          />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
