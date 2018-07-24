import React, { Component } from 'react';
import styles from './videos_list.css';

import Button from '../button/Button'

class VideosList extends Component {

  state = {
    teams:[],
    videos:[],
    start:this.props.start,
    end:this.props.end,
    amount:this.props.amount
  }

  componentWillMount(){

  }

  getTitle = (title) => {
    return title ?
      <h3><strong>NBA</strong> Videos</h3>
      :
      null
  }

  getButton = (loadMore) => {
    return loadMore ?
      <Button
        type={this.props.type}
        cta="More Videos"
      />
    :
    null
  }

  render(){
    return(
      <div className={styles.videoList_wrapper}>
        {this.getTitle(this.props.tittle)}
        {this.getButton(this.props.loadMore)}
      </div>
    );
  }
}


export default VideosList;
