import React, { Component } from 'react';

// BrowserRouter need to be in {} because its a member import
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}

export default Routes
