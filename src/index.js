import './styles/app.scss';
import React from 'react';
import { render } from 'react-dom';
import Main from './main';
import './styles/app.scss';

const app = document.querySelector('#app');

render(<Main />, app);
