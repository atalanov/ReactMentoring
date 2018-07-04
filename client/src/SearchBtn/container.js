// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from './action';
import Component from './component';

const mapStateToProps = state => ({
    filter: state.reducer.filterReducer.filter,
});

export class SearchBtn extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.actions.listShouldUpdate(this.props.filter);
    }
    render() {
        return (
            <Component handleClick={this.handleClick} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBtn);