import React from 'react';
import PropTypes from 'prop-types';
import ResultsCountComponent from './component';
import utils from './utils';

class ResultsCount extends React.Component {
    constructor(props) {
        super(props);
        this.countText = utils.formatCount(props.count);
    }
    render() {
        return (
          <ResultsCountComponent countText={this.countText} />
        );
    }
}

ResultsCount.propTypes = {
    count: PropTypes.number,
};
ResultsCount.defaultProps = {
    count: 0,
};
