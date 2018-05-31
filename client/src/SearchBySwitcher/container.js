import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchByComponent from './component';
import action from '../actions/filter-action';

const mapStateToProps = state => ({
    filter: state.reducer.filterReducer.filter,
});

function mapDispatchToProps(dispatch) { 
    return {
        actions: bindActionCreators(action, dispatch)
    }
}
class SearchBySwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.values = ['title', 'genres'];
        this.selected = 0;
    }
    handleClick = (index) => {
        this.selected = index;
        this.props.actions.changeFilterParam({
            searchBy: this.values[index],
        });
    }
    render() {
        const switcher = this.values.map((item, index) => <SearchByComponent key={item} selected={this.selected === index} text={item} handleClick={() =>this.handleClick(index)} />);
        return (
          <div>
            Search by {switcher}
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBySwitcher);
