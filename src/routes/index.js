import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import store from '../store';
import Home from '../pages/Home';
import Lyrics from '../pages/Lyrics';
import Search from '../pages/Search';
import Navbar from '../components/Navbar';
import PageNotFound from '../pages/PageNotFound';

const noNavBarPaths = ['/lyrics/*', '/', '/search'];

const AppRouter = withRouter(({ location }) => {
  return (
    <Provider store={store}>
      {noNavBarPaths.includes(location.pathname) ? <Navbar /> : ''}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/lyrics/:lyricsId/:commonTrackId"
          component={Lyrics}
        />
        <Route exact path="/search" component={Search} />
        <Route component={PageNotFound} />
      </Switch>
    </Provider>
  );
});

export default AppRouter;
