import React, { Component } from 'react';

import TeamInfo from '../../../widgets/article_info/TeamInfo';
import VideosList from '../../../widgets/videos_list/VideosList';

import styles from '../../articles.css';

class VideoArticle extends Component{
  state = {
    article:[],
    team:[]
  }

  componentWillMount(){
    let url = new URL("http://localhost:3001/videos"),
        params = {id:this.props.match.params.id}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then(function(response){
      return response.json();
    })
    .then((myJson)=>{
      let url2 = new URL("http://localhost:3001/teams"),
          params2 = {id:myJson[0].team}
      Object.keys(params2).forEach(key => url2.searchParams.append(key, params2[key]))
      fetch(url2)
      .then(function(res){
        return res.json();
      })
      .then((myJson2)=>{
        this.setState({
          article:myJson[0],
          team:myJson2[0]
        });
      });
    });
  }

  render(){
    return(
      <div>
          <TeamInfo
            teamData={this.state.team}
          />
        <div className={styles.videoWrapper}>
          <h1>{this.state.article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${this.state.article.url}`}
          >
          </iframe>
          <VideosList
            type="card"
            tittle={true}
            loadMore={true}
            start={4}
            amount={3}
          />
        </div>
      </div>
    );
  }
}

export default VideoArticle;
