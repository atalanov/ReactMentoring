import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviePreview from '../MoviePreview';
import actions from '../actions/filter-action';
import Component from './component';
import { events } from '../constants/constants';

const mapStateToProps = state => ({
    previews: state.reducer.filterReducer.previews.data,
    filter: state.reducer.filterReducer.filter,
    pendingEvent: state.reducer.filterReducer.pendingEvent,
    pending: state.reducer.filterReducer.pending,
});

export class MovieList extends React.Component {
    render() {
        if (this.props.previews && this.props.previews.length) {
            const listPreviews = this.props.previews.map(item => (<MoviePreview key={item.id} item={item} />));
            return (<Component list={listPreviews} />);
        }
        if (this.props.pending) {
            return (<div>Pending... Please stand by... </div>);
        }
        return (<div />);
    }
}

export default connect(mapStateToProps)(MovieList);
