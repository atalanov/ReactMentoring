import React from 'react';
import SearchBox from '../SearchBox';
import SearchBtn from '../SearchBtn';
import SearchBySwitcher from '../SearchBySwitcher';
import ErrorBoundary from '../ErrorBoundary';

export default props => (
  <ErrorBoundary>
    <SearchBox />
    <SearchBySwitcher />
    <SearchBtn />
  </ErrorBoundary>
);
