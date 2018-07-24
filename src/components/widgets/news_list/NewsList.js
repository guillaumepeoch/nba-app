import React, { Component } from 'react';

import { URL } from '../../../config';
import NewsListTemplates from './NewsListTemplates';
import Button from '../button/Button';

class NewsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams:[],
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
      let normalArticles = myJson.splice(this.state.start,this.state.amount);
      const newStart = this.state.start + this.state.amount;
      this.setState({
        items:[...this.state.items,...normalArticles],
        start:newStart
      });
    });
  }

  componentWillMount(){
    // Requesting Articles
    this.request();

    // Requesting teams
    if(!this.state.teams.length){
      fetch(`${URL}/teams`)
      .then(function(res){
        return res.json();
      })
      .then((myTeams) => {
        this.setState({
          teams:myTeams
        });
      });
    }
  }



  render(){
    return(
      <div>
        <NewsListTemplates
          data={this.state.items}
          teams={this.state.teams}
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
