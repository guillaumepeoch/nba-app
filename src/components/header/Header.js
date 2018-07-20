import React from 'react';

// Style Modules
import Style from './header.css';

// Link to route.. Equivalent of a tag
import { Link } from 'react-router-dom';
// FontAwesome provides Logo...
import FontAwesome from 'react-fontawesome'


const Header = function(){

  const logo = function(){
    return (
      <Link to="/" className={Style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    );
  };

  const navBars = function(){
    return(
      <div className={Style.bars}>
        <FontAwesome name="bars"></FontAwesome>
      </div>
    );
  };

  return(
    <header className={Style.header}>
      <div className={Style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}

export default Header;
