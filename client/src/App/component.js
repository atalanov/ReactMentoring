import React from 'react';
import Header from '../Header';
import ResultsControlBar from '../ResultsControlBar';

export default props => (
  <div className="container">
    <Header />
    <ResultsControlBar />
      {props.children}
  </div>
);

