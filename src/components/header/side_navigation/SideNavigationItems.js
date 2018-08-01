import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../../firebase';
import FontAwesome from 'react-fontawesome';

import style from './sideNavigation.css';


const SideNavigationItems = function(props){

  console.log(props.user)

  const items = [
    {
        type: style.option,
        icon: 'home',
        text: 'Home',
        link: '/',
        login: ''
    },
    {
        type: style.option,
        icon: 'file-text-o',
        text: 'News',
        link: '/news',
        login: ''
    },
    {
        type: style.option,
        icon: 'play',
        text: 'Videos',
        link: '/videos',
        login: ''
    },
    {
        type: style.option,
        icon: 'sign-in',
        text: 'Dashboard',
        link: '/dashboard',
        login: ''
    },
    {
        type: style.option,
        icon: 'sign-in',
        text: 'Sign in',
        link: '/sign-in',
        login: true
    },
    {
        type: style.option,
        icon: 'sign-out',
        text: 'Sign out',
        link: '/sign-out',
        login: false
    }
  ];

  const restricted = function(item,i){
    let template = null;

    if(props.user === null && item.login){
      template = getElement(item,i);
    }

    if(props.user !== null && !item.login){
      if(item.link === '/sign-out'){
        template = (
          <div
            className={item.type}
            key={i}
            onClick={(e)=>{
              firebase.auth().signOut()
              .then(()=>{
                props.history.push('/');
              })
            }}>
            <Link to={item.link}>
              <FontAwesome name={item.icon}></FontAwesome>
              {item.text}
            </Link>
          </div>
        )
      } else {
        template = getElement(item,i);
      }
    }

    return template
  }

  const getItems = function(){
    return items.map((item, index)=>{
      if(item.login === ''){
        return getElement(item,index);
      } else {
        return restricted(item, index);
      }
    });
  };

  const getElement = function(item, index){
    return(
      <div className={item.type} key={index} onClick={props.onHideNav}>
        <Link to={item.link}>
          <FontAwesome name={item.icon}></FontAwesome>
          {item.text}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {getItems()}
    </div>
  );
};

export default withRouter(SideNavigationItems);
