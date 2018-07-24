import React from 'react';
import styles from './videos_list.css';
import CardInfo from '../card_info/CardInfo';
import { Link } from 'react-router-dom';

const VideosListTemplates = function(props){
  console.log(props)
  const videos = props.videos.map(function(video,i){
    return (
      <Link to={`/video/${video.id}`} key={i}>
        <div className={styles.videoListItem_wrapper}>
          <div className={styles.left}
               style={{
                   background:`url(/images/videos/${video.image})`
               }}
           >
            <div></div>
           </div>
           <div className={styles.right}>
               <CardInfo teams={props.teams} teamid={video.team} date={video.date} />
               <h2>{video.title}</h2>
           </div>
        </div>
      </Link>
    );
  });

  return(
    <div>
        {videos}
    </div>
  );
}

export default VideosListTemplates;
