import React, { Component } from 'react';
import Header from './Header';
import styles from '../../articles.css';
import { firebase, firebaseDB, firebaseTeams, firebaseLooper } from '../../../../firebase';
import moment from 'moment';

class Index extends Component {
  state = {
    article:{},
    team:'',
    imageURL:''
  }

  componentWillMount(){
    const articleId = this.props.match.params.id;
    firebaseDB.ref(`articles/${articleId}`).once('value')
    .then((snapshot)=>{
      const article = snapshot.val();
      firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
      .then((snapshot)=>{
        const team = firebaseLooper(snapshot.val())[0];
        this.setState({
          article:article,
          team:team
        });

        firebase
          .storage()
          .ref("images")
          .child(article.file)
          .getDownloadURL()
          .then(url =>{
            this.setState({ imageURL: url })
        });
      })
      .catch(function(e){
        console.error(e)
      })
    })
    .catch(function(e){
      console.error(e);
    });


    // let url = new URL("http://localhost:3001/articles"),
    //     params = {id:this.props.match.params.id}
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // fetch(url).then(function(response){
    //   return response.json();
    // })
    // .then((myJson)=>{
    //   let url2 = new URL("http://localhost:3001/teams"),
    //       params2 = {id:myJson[0].team}
    //   Object.keys(params2).forEach(key => url2.searchParams.append(key, params2[key]))
    //   fetch(url2)
    //   .then(function(res){
    //     return res.json();
    //   })
    //   .then((myJson2)=>{
    //     this.setState({
    //       article:myJson[0],
    //       team:myJson2[0]
    //     });
    //   });
    // });
  }

  render(){
    return(
      <div>
        <Header
          teamData={this.state.team}
          date={moment(this.state.article.date).format("MMM Do YY")}
          author={this.state.article.author}
        />
        <div className={styles.articleBody}>
          <h1> {this.state.title} </h1>
          <div
            className={styles.articleImage}
            style={{background:`url('${this.state.imageURL}')`}}
          >
          </div>
          <div className={styles.articleText}
              dangerouslySetInnerHTML={{
                  __html:this.state.article.body
              }}
          >
          </div>
      </div>
    </div>
    );
  }
}

export default Index;
