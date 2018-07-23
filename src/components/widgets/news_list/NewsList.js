import React, { Component } from 'react';

import { URL } from '../../../config';
import NewsListTemplates from './NewsListTemplates';
import Button from '../button/Button';

class NewsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      ...this.props
    };
  }

  request = () => {
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
  }

  componentWillMount(){
    this.request();
  }

  render(){
    return(
      <div>
        <NewsListTemplates
          data={this.state.items}
          type="news"
        />
      <Button
        type="loadMore"
        loadMore={this.request}
        cta="Load more"
      />
      </div>
    );
  }
}

export default NewsList;
