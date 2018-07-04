// @flow
import React from 'react';
import MovieImage from '../MovieImage';
import MovieDescription from '../MovieDescription';

export default props => (
  <div>
    <MovieImage src={props.item.poster_path} />
    <MovieDescription
      jenre={props.item.genres.join(', ')}
      year={props.item.release_date}
      name={props.item.title}
    />
  </div>
);

