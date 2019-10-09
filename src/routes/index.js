import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import store from '../store';
import Home from '../pages/Home';

const AppRouter = withRouter(({ location }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
});

export default AppRouter;
