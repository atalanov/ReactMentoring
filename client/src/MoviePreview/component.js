// @flow
import React from 'react';
import MoviePreviewImage from '../MoviePreviewImage';
import MoviePreviewDescription from '../MoviePreviewDescription';

export default props => (
  <div className="col col-md-4">
    <MoviePreviewImage src={props.item.poster_path} id={props.item.id} />
    <MoviePreviewDescription
      jenre={props.item.genres.join(', ')}
      year={props.item.release_date}
      name={props.item.title}
      id={props.item.id}
    />
  </div>
);

