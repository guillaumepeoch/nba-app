import React from 'react';

import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

import style from './sideNavigation.css';


const SideNavigationItems = function(props){

  const items = [
    {
        type: style.option,
        icon: 'home',
        text: 'Home',
        link: '/'
    },
    {
        type: style.option,
        icon: 'file-text-o',
        text: 'News',
        link: '/news'
    },
    {
        type: style.option,
        icon: 'play',
        text: 'Videos',
        link: '/videos'
    },
    {
        type: style.option,
        icon: 'sign-in',
        text: 'Sign in',
        link: '/sign-in'
    },
    {
        type: style.option,
        icon: 'sign-out',
        text: 'Sign out',
        link: '/sign-out'
    }
  ];

  const getItems = function(){
    return items.map(({ type, icon, text, link}, index)=>{
      return(
        <div className={type} key={index} onClick={props.onHideNav}>
          <Link to={link}>
            <FontAwesome name={icon}></FontAwesome>
            {text}
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      {getItems()}
    </div>
  );
};

export default SideNavigationItems;
