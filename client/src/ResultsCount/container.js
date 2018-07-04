// @flow
import React from 'react';
import { connect } from 'react-redux';
import ResultsCountComponent from './component';
import utils from './utils';

const mapStateToProps = state => ({
    total: utils.formatCount(state.reducer.filterReducer.previews.total),
});

export class ResultsCount extends React.Component {
    render() {
        return (
          <ResultsCountComponent countText={this.props.total} />
        );
    }
}

export default connect(mapStateToProps)(ResultsCount);
