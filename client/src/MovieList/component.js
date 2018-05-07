import React from 'react';
import MoviePreview from '../MoviePreview';


export default props => (
  <div className={props.className}>
    {props.listPreviews}
  </div>
);

