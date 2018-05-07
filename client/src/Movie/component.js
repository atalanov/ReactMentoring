import React from 'react';
import MovieImage from '../MovieImage';
import MovieDescription from '../MovieDescription';

export default props => (
  <div>
    <MovieImage src={props.item.posterUrl} />
    <MovieDescription
      jenre={props.item.jenre}
      year={props.item.year}
      name={props.item.name}
    />
  </div>
);

