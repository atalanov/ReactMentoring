/* global document */
/* esLint no-undef:"error" */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import MovieList from './MovieList';
import Movie from './Movie';
import NotFound from './NotFound';
import appStore from './store';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <BrowserRouter>

    <Provider store={appStore}>
      <ErrorBoundary>
        <App>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/search">
              <MovieList />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
