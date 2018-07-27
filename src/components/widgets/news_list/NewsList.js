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

  request(){
    firebaseArticles.orderByChild('id').startAt(this.state.start).endAt(this.state.start + this.state.amount).once('value')
    .then(function(snapshot){
      return snapshot.val();
    })
    .then((articlesObj)=>{
        const articles = firebaseLooper(articlesObj);
        const newStart = this.state.start + this.state.amount;
        this.setState({
          items:[...this.state.items,...articles],
          start:newStart
        });
    })
    .catch(function(e){
      console.err(e);
    });
  }

  componentWillMount(){
    // Requesting Articles
    this.request();

    // Requesting teams
    if(!this.state.teams.length){

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
