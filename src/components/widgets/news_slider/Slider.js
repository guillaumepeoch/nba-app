import React, { Component } from 'react';

import SliderTemplates from './SliderTemplates';

import { firebaseArticles, firebaseLooper } from '../../../firebase';

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

    firebaseArticles.limitToFirst(3).once('value')
    .then(function(snapshot){
      return snapshot.val();
    })
    .then((data)=>{
      const articles = firebaseLooper(data);
      this.setState({
        articles:articles
      });
    })
    .catch(function(e){
      console.err(e);
    })


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
