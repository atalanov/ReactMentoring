import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <h4><Link to={`/movies/${props.id}`}>{props.name}</Link></h4>
    <p><Link to={`/movies/${props.id}`}>{props.jenre} ({props.year})</Link></p>
  </div>
);

