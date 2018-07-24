import React from 'react';
import styles from './card_info.css';
import FontAwesome from 'react-fontawesome';


const CardInfo = function(props){

  const teamName = function(){
    let team = props.teams.find(function(team){
      return team.id === props.teamid
    });
    if(team){
      return team.name
    } else {
      return ''
    }
  }

  return(
    <div className={styles.cardInfo}>
      <div className={styles.teamName}>
        {teamName()}
      </div>
      <span className={styles.date}>
        <FontAwesome name="o-clock"/>
        {props.date}
      </span>
    </div>
  )
}

export default CardInfo;
