// @flow
import React from 'react';
import SearchBox from '../SearchBox';
import SearchBtn from '../SearchBtn';
import SearchBySwitcher from '../SearchBySwitcher';
import ErrorBoundary from '../ErrorBoundary';

export default props => (
  <div className="row">
    <div className="col-12">
      <ErrorBoundary>
        <h4>
          Find your movie
        </h4>
        <SearchBox searchText={props.filter.search} />
        <SearchBySwitcher searchBy={props.filter.searchBy} />
        <SearchBtn filter={props.filter} />
      </ErrorBoundary>
    </div>
  </div>
);
