import { actions } from './constants';

const initialState = {
    previews: [],
    filter: {
        search: '',
        searchBy: 'title',
        sortBy: 'title',
        sortOrder: 'asc',
        filter: [],
        offset: 0,
        limit: 18,
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_SUCCESS:
            return {
                ...state,
                previews: action.data,
            };
        case actions.GET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
