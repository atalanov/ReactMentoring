import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviePreview from '../MoviePreview';
import actions from './action';
import Component from './component';

const mapStateToProps = state => ({
    previews: state.movieListReducer.previews.data,
    filter: state.movieListReducer.filter,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

class MovieList extends React.Component {
    componentDidMount() {
        this.props.actions.get(this.props.filter);
    }
    render() {
        if (this.props.previews && this.props.previews.length) {
            const listPreviews = this.props.previews.map(item => (<MoviePreview key={item.id} item={item} />));
            return (<Component list={listPreviews} />);
        }
        return (<div />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
