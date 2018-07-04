/* global document */
/* esLint no-undef:"error" */
import React from 'react';
import { hydrate } from 'react-dom';
import Index from './IndexComponent';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
hydrate(
  <Index Router={BrowserRouter} store={store} />, document.getElementById('root'));
