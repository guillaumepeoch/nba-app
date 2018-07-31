import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home'
import Articles from './components/articles/news/post/index';
import News from './components/news/News';
import ArticleVideos from './components/articles/videos/video/index';
import Videos from './components/videos/Videos';
import SignIn from './components/sign_in/SignIn';

import Layout from './hoc/layout/Layout'

class Routes extends Component {
  render() {
    return (
      <Layout user={this.props.user}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/article/:id" exact component={Articles} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/video/:id" exact component={ArticleVideos} />
          <Route path="/sign-in" exact component={SignIn} />
        </Switch>
      </ Layout>
    );
  }
}

export default Routes
