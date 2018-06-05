import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultSortingComponent from './component';
import action from '../actions/filter-action';

const mapStateToProps = state => ({
    filter: state.reducer.filterReducer.filter,
});

function mapDispatchToProps(dispatch) { 
    return {
        actions: bindActionCreators(action, dispatch)
    }
}

export class ResultSorting extends React.Component {
    constructor(props) {
        super(props);
        this.values = ['release_date', 'rating'];
        this.selected = 0;
    }
    handleClick = (index) => {
        this.selected = index;
        this.props.actions.changeFilterParam({
            sortBy: this.values[index],
        });
    }
    render() {
        const switcher = this.values.map((item, index) => <ResultSortingComponent key={item} selected={this.selected === index} text={item} handleClick={() =>this.handleClick(index)} />);
        return (
          <div>
            Sort by {switcher}
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSorting);
