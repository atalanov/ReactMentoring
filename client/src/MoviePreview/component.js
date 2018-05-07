import React from 'react';
import MoviePreviewImage from '../MoviePreviewImage';
import MoviePreviewDescription from '../MoviePreviewDescription';

export default props => (
  <div>
    <MoviePreviewImage src={props.item.posterUrl} />
    <MoviePreviewDescription
      jenre={props.item.jenre}
      year={props.item.year}
      name={props.item.name}
    />
  </div>
);

