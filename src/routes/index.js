import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Lyrics from '../pages/Lyrics';

const AppRouter = withRouter(({ location }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/lyrics/:lyricsId/:commonTrackId"
        component={Lyrics}
      ></Route>
    </Switch>
  );
});

export default AppRouter;
