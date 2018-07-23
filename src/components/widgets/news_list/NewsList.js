import React, { Component } from 'react';

class NewsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      ...this.props
    };
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
