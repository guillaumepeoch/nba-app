import React, { Component } from 'react';

// BrowserRouter need to be in {} because its a member import
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home'
import Layout from './hoc/layout/Layout'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </ Layout>
    );
  }
}

export default Routes