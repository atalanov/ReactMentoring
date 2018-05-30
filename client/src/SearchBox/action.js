import constants from './constants';

export default {
    changeFilterParam: obj => (dispatch) => {
        dispatch({
            type: constants.FILTER_CHANGED,
            params: obj,
        });
    },
};
