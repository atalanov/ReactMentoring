/* global document */
/* esLint no-undef:"error" */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import appStore from './store';
import "bootstrap/dist/css/bootstrap.css";

render(
  <Provider store={appStore}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>, document.getElementById('root'));
