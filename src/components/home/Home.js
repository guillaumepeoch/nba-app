import  React, { Component } from 'react';

import Slider from '../widgets/news_slider/Slider';
import NewsList from '../widgets/news_list/NewsList';
import VideosList from '../widgets/videos_list/VideosList';

class Home extends Component {
  render(){
    return (
      <div>
        <Slider
          type="featured"
          start={0}
          amount={4}
        />
        <NewsList
          start={3}
          amount={3}
        />
        <VideosList
          type="card"
          tittle={true}
          loadMore={true}
          start={4}
          amount={3}
        />
        </div>
    );
  }
}

export default Home;
