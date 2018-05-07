import React from 'react';
import ResultSortingComponent from './component';

export default class ResultSorting extends React.Component {
    constructor(props) {
        super(props);
        this.values = ['release date', 'rating'];
        this.selected = 0;
    }
    render() {
        const switcher = this.values.map((item, index) => <ResultSortingComponent key={item} selected={this.selected === index} text={item} />);
        return (
          <div>
            Sort by {switcher}
          </div>
        );
    }
}
