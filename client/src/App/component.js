import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router';
import Header from '../Header';
import MovieList from '../MovieList';
import MoviePreview from '../MoviePreview';

export default props => (
  <div className="container">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={MoviePreview} />
      </Switch>
    </BrowserRouter>
  </div>
);

