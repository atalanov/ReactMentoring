// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import action from '../actions/filter-action';

const mapStateToProps = state => {
    return {
        search: state.reducer.filterReducer.filter.search,
    }
};

export class SearchBox extends React.Component {
    handleChangeFunc = (event) => {
        this.props.actions.changeFilterParam({
            search: event.target.value,
        });
    }
    render() {
        return (
          <Component searchText={this.props.search} handleChange={this.handleChangeFunc} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
