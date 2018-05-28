import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';

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
