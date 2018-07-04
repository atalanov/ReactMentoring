// @flow
import { actions } from '../constants/constants';
import filterActions from '../actions/filter-action';

export default {
    listShouldUpdate: filter => dispatch => dispatch(filterActions.get(filter)),
};
