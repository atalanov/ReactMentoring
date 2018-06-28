import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div className="col">
    <Link to={`/movies/${props.id}`}><img src={props.src} alt={props.title} width="100%" /></Link>
  </div>
);

