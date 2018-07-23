import React, { Component } from 'react';

import { URL } from '../../../config';
import NewsListTemplates from './NewsListTemplates';

class NewsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      ...this.props
    };
  }

  componentWillMount(){
    fetch(`${URL}/articles`)
    .then(function(response){
      return response.json();
    })
    .then((myJson) => {
      const normalAticles = myJson.splice(this.state.start,this.state.amount);
      const newStart = this.state.start + this.state.amount
      this.setState({
        items:normalAticles,
        start:newStart
      });
    });
  }

  loadMore = () => {
    fetch(`${URL}/articles`)
    .then(function(response){
      return response.json();
    })
    .then((myJson) => {
      const normalAticles = myJson.splice(this.state.start,this.state.amount);
      const newStart = this.state.start + this.state.amount
      this.setState({
        items:[...this.state.items,...normalAticles],
        start:newStart
      });
    });
  };

  render(){
    console.log(this.state);
    return(
      <div>
        <NewsListTemplates
          data={this.state.items}
          type="news"
        />
      <div onClick={this.loadMore}>
          LOAD MORE
        </div>
      </div>
    );
  }
}

export default NewsList;
