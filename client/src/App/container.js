import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
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
    render() {
        return (<Component>
          {this.props.children}
        </Component>);
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
