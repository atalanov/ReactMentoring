import React from 'react';
import ResultSortingComponent from './component';

export default class ResultSorting extends React.Component {
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
