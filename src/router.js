import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {
  IndexPage,
  AboutPage
}  from './pages';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
