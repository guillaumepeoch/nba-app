import React from 'react';
import TeamInfo from '../../../widgets/article_info/TeamInfo';
import PostData from '../../../widgets/article_info/PostData';

const Header = function(props){

  const getTeamInfo = function(){
    return(
      <div>
        <TeamInfo
          teamData={props.teamData}
        />
        <PostData
          date={props.date}
          author={props.author}
        />
      </div>
    );
  }

  return(
    <div>
      {getTeamInfo()}
    </div>
  );
}

export default Header;
