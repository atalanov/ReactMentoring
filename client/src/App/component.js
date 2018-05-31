import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import MovieList from '../MovieList';
import Movie from '../Movie';
import ResultsControlBar from '../ResultsControlBar';

export default props => (
  <div className="container">
    <Header />
    <ResultsControlBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  </div>
);

