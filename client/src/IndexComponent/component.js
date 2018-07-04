import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import ErrorBoundary from '../ErrorBoundary';
import App from '../App';
import MovieList from '../MovieList';
import Movie from '../Movie';
import NotFound from '../NotFound';
import 'bootstrap/dist/css/bootstrap.css';

const Root = ({
  Router, location, context, store,
}) => (
  <Router>
    <Provider store={store}>
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
  </Router>
);
Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);
