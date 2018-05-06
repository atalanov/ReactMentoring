import React from 'react';

export default class MovieImage extends React.PureComponent {
    render() {
        return (
          <div>
            <img src={this.props.src} alt={this.props.title} />
          </div>
        );
    }
}
