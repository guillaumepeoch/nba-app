import React from 'react';
import styles from './team_info.css';

const PostData = function(props){

  return (
    <div className={styles.articlePostData}>
      <div>
        Date : 
        <span>{props.date}</span>
      </div>
      <div>
        Author :
        <span>{props.author}</span>
      </div>
    </div>
  )
}

export default PostData;
