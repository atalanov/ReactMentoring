import reducer from './filter-reducer';
import { actions, events } from '../constants/constants';

test('reducer receives action', () => {
    const state = reducer({}, { type: actions.GET_SUCCESS, data: false });
    expect(state).toEqual({
        previews: false,
        pendingEvent: null,
        pending: false,
    });
});


test('reducer receives action error', () => {
    const state = reducer({}, { type: actions.GET_ERROR, error: false });
    expect(state).toEqual({
        error: false,
        pendingEvent: null,
        pending: false,
    });
});


test('reducer receives action', () => {
    const state = reducer({}, { type: actions.GET_PENDING, pending: true });
    expect(state).toEqual({
        pending: true,
    });
});


test('reducer receives action', () => {
    const state = reducer({ filter: {} }, { type: actions.FILTER_CHANGE, params: { param1: false } });
    expect(state).toEqual({
        filter: {
           param1: false,
        },
    });
});


test('reducer receives action', () => {
    const state = reducer({}, { type: actions.LIST_SHOULDUPDATE, reporter: false });
    expect(state).toEqual({
        pendingEvent: {
            event: events.UPDATE,
            reporter: false,
        },
    });
});

test('initial state', () => {
    const state = reducer(undefined, { type: false });
    expect(state).toEqual({
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
    });
});
