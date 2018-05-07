import React from 'react';

export default props => (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <h4 className="alert-heading">Error:</h4>
    <p>Message: {props.message}</p>
    <hr />
    <p className="mb-0">Stack trace: <br />
      {props.componentStack}
    </p>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);
