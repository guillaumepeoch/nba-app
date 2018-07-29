import React, { Component } from 'react';
import styles from './videos_list.css';
import { firebaseDB, firebaseTeams, firebaseVideos, firebaseLooper } from '../../../firebase';
import Button from '../button/Button';
import VideosListTemplates from './VideosListTemplates';

class VideosListRelated extends Component {

  state = {
    teams: [],
    videos: [],
    ...this.props
  }

  componentWillReceiveProps(nextProps, nextContext){
    const relatedTeam = nextProps.relatedTeam;
    this.setState({
      relatedTeam
    });

    firebaseVideos
    .orderByChild('team')
    .equalTo(relatedTeam)
    .limitToFirst(this.state.amount)
    .once('value')
    .then((snap)=>{
        const videos = firebaseLooper(snap.val());
        this.setState({
          videos
        });
    });

    firebaseTeams.once('value')
    .then((snapshot)=>{
      const teams = firebaseLooper(snapshot.val());
      this.setState({
        teams
      });
    })
  }

  getVideos() {
    return (<div>
      <VideosListTemplates videos={this.state.videos} teams={this.state.teams}/>
    </div>);
  }

  getButton(loadMore) {
    return loadMore
      ? <Button type={this.props.type} cta="More Videos" loadMore={this.loadMore}/>
      : null
  }

  loadMore = () => {
    console.log('LogMore')
  }

  render() {
    return (<div className={styles.videoList_wrapper}>
      {this.getVideos()}
      {this.getButton(this.props.loadMore)}
    </div>);
  }

}

export default VideosListRelated;
