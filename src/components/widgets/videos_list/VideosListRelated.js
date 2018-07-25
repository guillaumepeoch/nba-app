import React, {Component} from 'react';
import styles from './videos_list.css';
import { URLDev } from '../../../config';
import Button from '../button/Button';
import VideosListTemplates from './VideosListTemplates';

class VideosListRelated extends Component {

  state = {
    teams: [],
    videos: [],
    relatedTeam: this.props.relatedTeam,
    start: this.props.start,
    end: this.props.end,
    amount: this.props.amount
  }

  componentWillMount() {
    let url = new URL(`${URLDev}/videos`),
        params = {tags:["Boston","Oklahoma"]}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    console.log(url);
    fetch(url).then(function(response){
      return response.json();
    })
    .then((myJson)=>{
      console.log(myJson);
      let splicedVideos = myJson.splice(this.props.start, this.props.amount);
      this.setState({
        videos:splicedVideos,
        start: this.props.start + this.props.amount
      });
    });

    // Get the teams
    if (!this.state.teams.length) {
      fetch(`${URLDev}/teams`).then(function(res) {
        return res.json();
      }).then((myTeams) => {
        this.setState({teams: myTeams});
      });
    }
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
    let url = new URL("http://localhost:3001/videos"),
        params = {tags:["Boston","Oklahoma"]}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then(function(res) {
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
      {this.getVideos()}
      {this.getButton(this.props.loadMore)}
    </div>);
  }

}

export default VideosListRelated;
