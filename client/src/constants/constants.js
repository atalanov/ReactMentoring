// @flow
const actions = {
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ERROR: 'GET_ERROR',
    FILTER_CHANGE: 'FILTER_CHANGE',
    LIST_SHOULDUPDATE: 'LIST_SHOULDUPDATE',
    GET_PENDING: 'GET_PENDING',
    GETBYID_SUCCESS: 'GETBYID_SUCCESS',
    GETBYID_ERROR: 'GETBYID_ERROR',
    GETBYID_PENDING: 'GETBYID_PENDING',
};

const API_URL = 'http://react-cdp-api.herokuapp.com/movies';
const events = {
    UPDATE: 'UPDATE',
};
export {
    actions,
    API_URL,
    events,
};
