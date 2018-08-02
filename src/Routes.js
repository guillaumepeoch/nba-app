import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/home/Home'
import Articles from './components/articles/news/post/index';
import News from './components/news/News';
import ArticleVideos from './components/articles/videos/video/index';
import Videos from './components/videos/Videos';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/sign_in/SignIn';
import PublicRoute from './components/auth_routes/PublicRoute';
import PrivateRoute from './components/auth_routes/PrivateRoute';

import Layout from './hoc/layout/Layout'

class Routes extends Component {
  render() {
    return (
      <Layout user={this.props.user}>
        <Switch>
          <Switch>
              <PublicRoute {...this.props} restricted={false} path="/" exact component={Home}/>
              <PublicRoute {...this.props} restricted={false} path="/news" exact component={News}/>
              <PublicRoute {...this.props} restricted={false} path="/articles/:id" exact component={Articles}/>
              <PublicRoute {...this.props} restricted={false} path="/videos/:id" exact component={ArticleVideos}/>
              <PublicRoute {...this.props} restricted={false} path="/videos" exact component={Videos}/>
              <PublicRoute {...this.props} restricted={true} path="/sign-in" exact component={SignIn}/>
              <PrivateRoute {...this.props} path="/dashboard" exact component={Dashboard}/>
          </Switch>
        </Switch>
      </ Layout>
    );
  }
}

export default Routes
