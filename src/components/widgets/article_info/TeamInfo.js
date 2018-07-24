import React from 'react';
import styles from './team_info.css';

const TeamInfo = function(props){

  const getWinsLosts = function(){
    let wins, losts = null;
    if(props.teamData){
      wins = props.teamData.stats[0].wins;
      losts = props.teamData.stats[0].defeats;
    }
    return (
      <span> W:{wins} - L{losts}: </span>
    );
  }

  const getCityTeam = function(){
    let city, name = null;
    if(props.teamData){
      city = props.teamData.city;
      name = props.teamData.name;
    }
    return (
      <span> City: {city} - Team: {name} </span>
    );
  }

  return(
    <div className={styles.articleTeamHeader}>
      <div className={styles.left}
           style={{
             background:`url(/images/teams/${props.teamData ? props.teamData.logo : null})`
           }}
      >
      </div>
      <div className={styles.right}>
        <div>
            {getCityTeam()}
        </div>
        <div>
            {getWinsLosts()}
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
