import React from 'react';

// SideNav is a package that helps with side navigations
import SideNav from 'react-simple-sidenav';

const SideNavigation = function(props){
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      onShowNav={props.onOpenNav}
      navStyle={{
        background:'black',
        color:'white'
      }}
      />
  );
};

export default SideNavigation;
