import React, { Component } from 'react';

import SliderTemplates from './SliderTemplates';

class Slider extends Component {

  constructor() {
    super();
    this.state = {
      articles:[]
    }
  }

  componentWillMount(){
    fetch('http://localhost:3001/articles').then(function(response){
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      return response.json();
    }).then(myJson => {
      this.setState({
        articles:myJson
      })
    }).catch( function(error){
      console.error(error);
    });
  }

  render(){
    return(
      <div>
          <SliderTemplates data={this.state.articles} type="featured"/>
      </div>
    );
  }
}

export default Slider;
