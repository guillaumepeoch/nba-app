import React, {Component} from 'react';
import styles from './videos_list.css';
import Button from '../button/Button';
import VideosListTemplates from './VideosListTemplates';
import { firebaseVideos, firebaseTeams, firebaseLooper } from '../../../firebase';

class VideosList extends Component {

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    amount: this.props.amount
  }

  componentWillMount() {
    this.requestVideos();
    this.requestTeams();
  }

  requestTeams(){
    // Get the teams
    !this.state.teams.length && firebaseTeams.once('value')
      .then(function(snapshot){
        return snapshot.val();
      })
      .then((teamsObj)=>{
        const teams = firebaseLooper(teamsObj);
        this.setState({
          teams:teams
        });
      })

      // fetch(`${URLDev}/teams`).then(function(res) {
      //   return res.json();
      // }).then((myTeams) => {
      //   this.setState({teams: myTeams});
      // });
  }

  requestVideos(){
    // Get the Videos
    const start = this.state.start;
    const end = this.state.start + this.state.amount;
    firebaseVideos.orderByChild('id').startAt(start).endAt(end - 1).once('value')
    .then(function(snapshot){
      return snapshot.val();
    })
    .then((videosObj)=>{
       const videos = firebaseLooper(videosObj);
       const oldVideos = this.state.videos;
       this.setState({
         videos:[...oldVideos,...videos],
         start:end
       });
    })


    // fetch(`${URLDev}/videos`).then(function(res) {
    //   return res.json();
    // }).then((myVideos) => {
    //   let splicedVideos = myVideos.splice(this.props.start, this.props.amount);
    //   this.setState({
    //     videos: splicedVideos,
    //     start: this.props.start + this.props.amount
    //   });
    // });
  }

  getTitle(title) {
    return title
      ? <h3>
          <strong>NBA</strong>
          Videos
        </h3>
      : null
  }

  getVideos() {
    return (
      <div>
        <VideosListTemplates videos={this.state.videos} teams={this.state.teams}/>
      </div>
    );
  }

  getButton(loadMore) {
    return loadMore ?
      <Button type={this.props.type} cta="More Videos" loadMore={this.loadMore}/>
      : null
  }

  loadMore = () => {

    this.requestVideos();

    // fetch(`${URLDev}/videos`).then(function(res) {
    //   return res.json();
    // }).then((myVideos) => {
    //   let splicedVideos = myVideos.splice(this.state.start, this.state.amount);
    //   let newStart = this.state.start + this.state.amount
    //   this.setState({
    //     videos: [
    //       ...this.state.videos,
    //       ...splicedVideos
    //     ],
    //     start: newStart
    //   });
    // });
  }

  render() {
    return (<div className={styles.videoList_wrapper}>
      {this.getTitle(this.props.tittle)}
      {this.getVideos()}
      {this.getButton(this.props.loadMore)}
    </div>);
  }

}

export default VideosList;
