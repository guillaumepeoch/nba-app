import React, { Component } from 'react';

import { URL } from '../../../config';

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
      this.setState({
        items:normalAticles
      });
    });
  }

  render(){
    console.log(this.state);
    return(
      <div>
        NewsList
      </div>
    );
  }
}

export default NewsList;
