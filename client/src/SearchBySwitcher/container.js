import React from 'react';
import SearchByComponent from './component';

export default class SearchBySwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.values = ['title', 'genre'];
        this.selected = 0;
    }
    render() {
        const switcher = this.values.map((item, index) => <SearchByComponent key={item} selected={this.selected === index} text={item} />);
        return (
          <div>
            Search by {switcher}
          </div>
        );
    }
}
