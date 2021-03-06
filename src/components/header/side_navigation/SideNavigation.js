import React from 'react';

// SideNav is a package that helps with side navigations
import SideNav from 'react-simple-sidenav';

import SideNavigationItems from './SideNavigationItems';

const SideNavigation = function(props){
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      onShowNav={props.onOpenNav}
      navStyle={{
        background:'#242424',
        maxWidth:'220px'
      }}
    >
      <SideNavigationItems
        onHideNav={props.onHideNav}
        user={props.user}
      />
    </SideNav>
  );
};

export default SideNavigation;
