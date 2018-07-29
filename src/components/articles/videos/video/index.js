import React, { Component } from 'react';
import { firebaseDB, firebaseTeams, firebaseLooper } from '../../../../firebase';
import TeamInfo from '../../../widgets/article_info/TeamInfo';
import VideosListRelated from '../../../widgets/videos_list/VideosListRelated';

import styles from '../../articles.css';

class VideoArticle extends Component{
  state = {
    article:[],
    team:[],
    teams:[],
    related:[]
  }

  componentWillMount(){
    firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
    .then((snapshot)=>{
      const video = snapshot.val();
      const teamId = video.team;
      firebaseTeams.orderByChild('id').equalTo(teamId).once('value')
      .then((snapshot)=>{
        const team = firebaseLooper(snapshot.val())[0];
        this.setState({
          team:team,
          article:video
        })
      })
    })
    // let url = new URL(`${URLDev}/videos`),
    //     params = {id:this.props.match.params.id}
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // fetch(url).then(function(response){
    //   return response.json();
    // })
    // .then((myJson)=>{
    //   let url2 = new URL(`${URLDev}/teams`),
    //       params2 = {id:myJson[0].team}
    //   Object.keys(params2).forEach(key => url2.searchParams.append(key, params2[key]))
    //   fetch(url2)
    //   .then(function(res){
    //     return res.json();
    //   })
    //   .then((myJson2)=>{
    //     this.setState({
    //       article:myJson[0],
    //       team:myJson2[0]
    //     });
    //   });
    // });
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
          <VideosListRelated
            type="card"
            tittle={true}
            loadMore={false}
            amount={3}
            relatedTeam={this.state.team.teamId}
          />
        </div>
      </div>
    );
  }
}

export default VideoArticle;
