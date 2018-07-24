import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CardInfo from '../card_info/CardInfo';
import styles from './news_list_templates.css';


const NewsListTemplates = function(props){

  let template = null;

  switch(props.type){
    case "news":
      template =  props.data.map((article, index)=>{
        return(
          <CSSTransition
            classNames={{
              enter:styles.newsList_wrapper,
              enterActive:styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={index}
          >
          <div className={styles.newslist_item}>
            <Link to={`/article/${article.id}`}>
              <CardInfo
                teams={props.teams}
                teamid={article.team}
                date={article.date}
              ></CardInfo>
              <h2>{article.title}</h2>
            </Link>
          </div>
          </CSSTransition>
        );
      });
      break;
    default:
    template = null;
  }

  return(
    <div>
      <TransitionGroup
        component="div"
        className="list"
      >
        {template}
      </TransitionGroup>
    </div>
  );
}

export default NewsListTemplates;
