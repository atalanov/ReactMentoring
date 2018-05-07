import React from 'react';
import MovieListComponent from './component';
import utils from './utils';
import MoviePreview from '../MoviePreview';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.previews = utils.get();
    }
    render() {
        const listPreviews = this.previews.map(item => (<MoviePreview key={item.id} item={item} />));
        console.log(listPreviews);
        return (
          <div>
            {listPreviews}
          </div>
        );
    }
}
