import React from 'react';

export default props => (
  <button className={props.selected ? 'selected' : ''}>{props.text}</button>
);
