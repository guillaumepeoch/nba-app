import React, { Component } from 'react';
import Header from './Header';
import styles from '../../articles.css';

class Index extends Component {
  state = {
    article:{},
    team:''
  }

  componentWillMount(){
    let url = new URL("http://localhost:3001/articles"),
        params = {id:this.props.match.params.id}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then(function(response){
      return response.json();
    })
    .then((myJson)=>{
      let url2 = new URL("http://localhost:3001/teams"),
          params2 = {id:myJson[0].team}
      Object.keys(params2).forEach(key => url2.searchParams.append(key, params[key]))
      fetch(url2)
      .then(function(res){
        return res.json();
      })
      .then((myJson2)=>{
        this.setState({
          article:myJson[0],
          team:myJson2[0]
        });
      });
    });
  }

  render(){
    return(
      <div>
        <Header
          teamData={this.state.team}
          date={this.state.article.date}
          author={this.state.article.author}
        />
        <div className={styles.articleBody}>
          <h1> {this.state.title} </h1>
          <div
            className={styles.articleImage}
            style={{background:`url('/images/articles/${this.state.article.image}')`}}
          >
          </div>
          <div className={styles.articleText}>
            {this.state.article.body}
          </div>
        </div>
      </div>

    );
  }
}

export default Index;
