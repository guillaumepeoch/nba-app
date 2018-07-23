import  React, { Component } from 'react';

import Slider from '../widgets/news_slider/Slider';
import NewsList from '../widgets/news_list/NewsList'

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
      </div>
    );
  }
}

export default Home;
