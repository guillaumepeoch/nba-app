import React from 'react';

import styles from './styles.css'

const Button = function(props){
  let template = null;

  switch(props.type){
    case "loadMore":
      template = (
        <div
          className={styles.blue_btn}
          onClick={props.loadMore}
        >
          {props.cta}
        </div>
      );
    break;
    default:
     template= null;
  }

  return template;
};

export default Button;
