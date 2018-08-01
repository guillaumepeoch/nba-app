import React, { Component } from 'react';

import SliderTemplates from './SliderTemplates';

import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase';

// We are now using firebase
// import { URLDev } from '../../../config';

class Slider extends Component {

  constructor(props) {
    super();
    this.state = {
      articles:[]
    }
  }

  componentWillMount(){

    firebaseArticles.limitToFirst(this.props.amount).once('value')
    .then(function(snapshot){
      return snapshot.val();
    })
    .then((data)=>{
      const articles = firebaseLooper(data);

    //   articles.forEach((article) => {
    //     firebase
    //       .storage()
    //       .ref("images")
    //       .child(article.file)
    //       .getDownloadURL()
    //       .then(url =>{
    //         article.imageSrc=url;
    //         this.setState({
    //           articles
    //         })
    //     });
    //   });
    // })
    // .catch(function(e){
    //   console.log(e);
    // })



    const asyncFunction = (item,i,cb) =>{
         firebase.storage().ref('images')
         .child(item.file).getDownloadURL()
         .then(url => {
             articles[i].imageSrc = url;
             cb();
         })
     }


     // let request = [promise 1(ended), promise 2(ended), promise 3(ended)]
     let requests = articles.map((item,i) =>{
         return new Promise((resolve)=> {
             asyncFunction(item,i, resolve)
         })
     })

     Promise.all(requests).then(()=>{
         this.setState({
             articles
         })
     })

   });


    // fetch(`${URLDev}/articles`).then(function(response){
    //   if (response.status !== 200) {
    //     console.log('Looks like there was a problem. Status Code: ' +
    //       response.status);
    //     return;
    //   }
    //   return response.json();
    // }).then(myJson => {
    //   const articles = myJson.splice(this.props.start,this.props.start+this.props.amount);
    //   this.setState({
    //     articles:articles
    //   })
    // }).catch( function(error){
    //   console.error(error);
    // });
  }

  render(){
    return(
      <div>
          <SliderTemplates
            data={this.state.articles}
            type="featured"
          />
      </div>
    );
  }
}

export default Slider;
