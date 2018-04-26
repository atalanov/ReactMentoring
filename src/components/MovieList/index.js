import React from 'react';
import MoviePreview from '../MoviePreview';
import { previews } from '../../data';

export default class MovieList extends React.Component {
    render() {
        console.log(1);
        const listPreviews = previews.map(item => (<MoviePreview key={item.id} item={item} />));
        console.log(listPreviews);
        return (
          <div className={this.props.className}>
            {listPreviews}
          </div>
        );
    }
}
