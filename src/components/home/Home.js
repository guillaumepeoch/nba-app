import  React, { Component } from 'react';

import Slider from '../widgets/news_slider/Slider';

class Home extends Component {
  render(){
    return (
      <div>
        <Slider
          type="featured"
          start={0}
          amount={4}
        />
      </div>
    );
  }
}

export default Home;
