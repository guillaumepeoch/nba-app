import React, { Component } from 'react';

import { firebaseLooper, firebaseArticles, firebaseTeams } from '../../../firebase';
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

  requestArticles = () => {
    const start = this.state.start;
    const end = this.state.start + this.state.amount;
    firebaseArticles.orderByChild('id').startAt(start).endAt(end - 1 ).once('value')
    .then(function(snapshot){
      return snapshot.val();
    })
    .then((articlesObj)=>{
        const articles = firebaseLooper(articlesObj);
        this.setState({
          items:[...this.state.items,...articles],
          start:end
        });
    })
    .catch(function(e){
      console.err(e);
    });
  }

  componentWillMount(){
    // Requesting Articles
    this.requestArticles();

    // Requesting teams
    !this.state.teams.length && this.requestingTeams();
  }

  requestingTeams(){
      firebaseTeams.once('value')
      .then(function(snapshot){
        return snapshot.val();
      })
      .then((teamsObj)=>{
        const teams = firebaseLooper(teamsObj);
        this.setState({
          teams:teams
        });
      })
      .catch(function(e){
        console.err(e);
      });

      // fetch(`${URLDev}/teams`)
      // .then(function(res){
      //   return res.json();
      // })
      // .then((myTeams) => {
      //   this.setState({
      //     teams:myTeams
      //   });
      // });
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
          loadMore={this.requestArticles}
          cta="Load more"
        />
      </div>
    );
  }
}

export default NewsList;
