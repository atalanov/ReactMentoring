// @flow
import React from 'react';
import ResultsCount from '../ResultsCount';
import ResultsSorting from '../ResultsSorting';

export default props => (
  <div className="row">
    <div className="col-8">
      <ResultsCount />
    </div>
    <div className="col-4 text-right">
      <ResultsSorting />
    </div>
  </div>
);
