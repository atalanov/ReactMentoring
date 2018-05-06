import React from 'react';

export default class MovieDescription extends React.PureComponent {
    render() {
        return (
          <div>
            <h4>{this.props.name}</h4>
            <p>{this.props.jenre} ({this.props.year})</p>
          </div>
        );
    }
}
