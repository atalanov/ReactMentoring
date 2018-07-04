// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/filter-action';
import { events } from '../constants/constants';
import Component from './component';

const mapStateToProps = state => ({
    movie: state.reducer.filterReducer.movie,
    pending: state.reducer.filterReducer.pending,
});

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(actions, dispatch),
    };
}

export class Movie extends React.Component {
    componentDidMount() {
        this.props.filterActions.getByID(this.props.match.params.id);
    }
    render() {
        console.log(this.props.movie);
        if (this.props.movie) {
            return (<Component item={this.props.movie} />);
        }
        if (this.props.pending) {
            return (<div>Pending... Please stand by... </div>);
        }
        return (<div />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
