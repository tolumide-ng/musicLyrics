import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../pages/Home';

const AppRouter = withRouter(({ location }) => {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Provider>
  );
});

export default AppRouter;
