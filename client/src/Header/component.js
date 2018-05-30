import React from 'react';
import SearchBox from '../SearchBox';
import SearchBtn from '../SearchBtn';
import SearchBySwitcher from '../SearchBySwitcher';
import ErrorBoundary from '../ErrorBoundary';

export default props => (
  <ErrorBoundary>
    <SearchBox searchText={props.filter.search} />
    <SearchBySwitcher searchBy={props.filter.searchBy} />
    <SearchBtn filter={props.filter} />
  </ErrorBoundary>
);
