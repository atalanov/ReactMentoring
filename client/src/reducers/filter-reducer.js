import { actions, events } from '../constants/constants';

const initialState = {
    previews: {},
    filter: {
        search: '',
        searchBy: 'title',
        sortBy: 'title',
        sortOrder: 'asc',
        filter: [],
        offset: 0,
        limit: 18,
    },
    pendingEvent: { event: events.UPDATE, reporter: 'initial' },
    pending: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_SUCCESS:
            return {
                ...state,
                previews: action.data,
                pendingEvent: null,
                pending: false,
            };
        case actions.GET_ERROR:
            return {
                ...state,
                error: action.error,
                pendingEvent: null,
                pending: false,
            };
        case actions.GET_PENDING:
            return {
                ...state,
                pending: action.pending,
            };
        case actions.FILTER_CHANGE:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.params,
                },
            };
        case actions.LIST_SHOULDUPDATE:
            return {
                ...state,
                pendingEvent: {
                    event: events.UPDATE,
                    reporter: action.reporter,
                },
            };
        case actions.GETBYID_SUCCESS:
            return {
                ...state,
                movie: action.data,
            };
        case actions.GETBYID_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case actions.GETBYID_PENDING:
            return {
                ...state,
                pending: action.pending,
            };
        default:
            return state;
    }
}
