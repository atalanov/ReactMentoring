/* global document */
/* esLint no-undef:"error" */
import React from 'react';
import { render } from 'react-dom';
import { App, MovieList } from './components';
import './style.css';

const movieList = React.createElement(MovieList, { className: 'class1' });
render(
    movieList,
    document.getElementById('root'),
);
