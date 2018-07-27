import React from 'react';
import styles from './card_info.css';
import FontAwesome from 'react-fontawesome';
import Moment from 'moment';


const CardInfo = function(props){

  const teamName = function(){
    let team = props.teams.find(function(team){
      return team.teamId === props.teamid
    });
    if(team){
      return team.name
    } else {
      return ''
    }
  }

  const dateFormat = function(weirdDate){
    return Moment(weirdDate).format("MMM Do YY");
  }

  return(
    <div className={styles.cardInfo}>
      <div className={styles.teamName}>
        {teamName()}
      </div>
      <span className={styles.date}>
        <FontAwesome name="o-clock"/>
        {dateFormat(props.date)}
      </span>
    </div>
  )
}

export default CardInfo;
