import React from 'react';
import { Link } from 'react-router-dom';
import styles from './news_list_templates.css';


const NewsListTemplates = function(props){

  let template = null;

  switch(props.type){
    case "news":
      template =  props.data.map(function(article, index){
        return(
          <div key={index}>
            <div className={styles.newslist_item}>
              <h2>{article.title}</h2>
              <Link to={`/article/${article.id}`}>Visit</Link>
            </div>
          </div>
        );
      });
      break;
    default:
    template = null;
  }

  return(
    <div>
      {template}
    </div>
  );
}

export default NewsListTemplates;
