import './styles/app.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './main';
import './styles/app.scss';

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  app
);
