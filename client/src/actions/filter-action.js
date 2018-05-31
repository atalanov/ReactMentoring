import { actions } from '../constants/constants';
import utils from './utils';

export default {
    get: (filter) => {
        function load(data) {
            return {
                type: actions.GET_SUCCESS,
                data,
            };
        }
        function failure(error) {
            return {
                type: actions.GET_ERROR,
                error,
            };
        }
        return (dispatch) => {
            dispatch({ type: actions.GET_PENDING, pending: true });
            utils.get(filter).then(
                data => dispatch(load(data)),
                error => dispatch(failure(error)),
            );
        };
    },
    changeFilterParam: obj => (dispatch) => {
        dispatch({
            type: actions.FILTER_CHANGE,
            params: obj,
        });
    },
};

