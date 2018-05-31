import React from 'react';

export default props => (
  <button className={props.selected ? 'selected' : ''} onClick={props.handleClick}>{props.text}</button>
);
