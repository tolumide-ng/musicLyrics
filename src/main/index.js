import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../store';
import Main from '../routes';

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
