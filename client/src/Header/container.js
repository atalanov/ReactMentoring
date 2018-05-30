import React from 'react';
import connect from 'react-redux';
import Component from './component';

const mapStateToProps = state => ({
    filter: state.movieListReducer.filter,
});
class Header extends React.Component {
    handleClick() {
        this.props.actions.get(this.props.filter);
    }
    render() {
        return (
          <Component filter={this.props.filter} />
        );
    }
}

export default connect(mapStateToProps)(Header);
