import { actions } from './constants';
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
            utils.get(filter).then(
                data => dispatch(load(data)),
                error => dispatch(failure(error)),
            );
        };
    },
};

