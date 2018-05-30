import React from 'react';
import connect from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import action from './action';

const mapStateToProps = state => ({
    search: state.movieListReducer.filter.search,
});

class SearchBox extends React.Component {
    handleChange(text) {
        this.actions.changeFilterParam({
            search: text,
        });
    }
    render() {
        return (
          <Component searchText={this.props.search} handleChange={this.handleChange} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
