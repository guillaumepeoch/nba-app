import React from 'react';

// Style CSS Modules
import style from './header.css';

// Link to route.. Equivalent of a tag
import { Link } from 'react-router-dom';
// FontAwesome provides Logo...
import FontAwesome from 'react-fontawesome';

// Import custome funtion SideNavigation
import SideNavigation from './side_navigation/SideNavigation';


const Header = function(props){

  const logo = function(){
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    );
  };

  const navBars = function(){
    return(
      <div className={style.bars}>
        <FontAwesome
          name="bars"
          onClick={()=>props.onOpenNav(true)}
          style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
        />
      </div>
    );
  };

  return(
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}

export default Header;
