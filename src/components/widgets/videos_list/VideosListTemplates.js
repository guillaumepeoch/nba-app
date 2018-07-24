import React from 'react';
import styles from './videos_list.css';
import CardInfo from '../card_info/CardInfo';
import { Link } from 'react-router-dom';

const VideosListTemplates = function(props){
  const videos = props.videos.map(function(video,i){
    return (
      <Link to={`/video/${video.id}`} className={styles.videoListItem_wrapper} key={i}>
         <div className={styles.left}
              style={{
                  background:`url(/images/videos/${video.image})`
              }}
          >
          </div>
          <div className={styles.right}>
              <CardInfo teams={props.teams} teamid={video.team} date={video.date}/>
              <h2>{video.title}</h2>
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
