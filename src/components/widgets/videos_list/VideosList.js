import React, {Component} from 'react';
import styles from './videos_list.css';
import {URL} from '../../../config';
import Button from '../button/Button';
import VideosListTemplates from './VideosListTemplates';

class VideosList extends Component {

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.end,
    amount: this.props.amount
  }

  componentWillMount() {
    // Get the Videos
    fetch(`${URL}/videos`).then(function(res) {
      return res.json();
    }).then((myVideos) => {
      let splicedVideos = myVideos.splice(this.props.start, this.props.amount);
      this.setState({
        videos: splicedVideos,
        start: this.props.start + this.props.amount
      });
    });

    // Get the teams
    if (!this.state.teams.length) {
      fetch(`${URL}/teams`).then(function(res) {
        return res.json();
      }).then((myTeams) => {
        this.setState({teams: myTeams});
      });
    }
  }

  getTitle(title) {
    return title
      ? <h3>
          <strong>NBA</strong>
          Videos</h3>
      : null
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
    fetch(`${URL}/videos`).then(function(res) {
      return res.json();
    }).then((myVideos) => {
      let splicedVideos = myVideos.splice(this.state.start, this.state.amount);
      let newStart = this.state.start + this.state.amount
      this.setState({
        videos: [
          ...this.state.videos,
          ...splicedVideos
        ],
        start: newStart
      });
    });
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
