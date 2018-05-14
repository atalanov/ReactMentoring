/* global document */
/* esLint no-undef:"error" */
import React from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));
