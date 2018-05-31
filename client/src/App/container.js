import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import actions from '../actions/filter-action';

const mapStateToProps = state => ({
    filter: state.reducer.filterReducer.filter,
});

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(actions, dispatch),
    };
}

class App extends React.Component {
    componentDidMount() {
        this.props.filterActions.get(this.props.filter);
    }
    render() {
        return (<Component />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
