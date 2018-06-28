import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import filterAction from './filter-action';
import { actions, API_URL } from '../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('creates GET_SUCCESS', () => {
    fetchMock
      .getOnce(API_URL, { body: { responseBody: ['do something'] }, headers: { 'content-type': 'application/json' } });
    const expectedActions = [
      { type: actions.GET_PENDING },
      { type: actions.GET_SUCCESS, body: { responseBody: ['do something'] } },
    ];
    const store = mockStore({ previews: {} });
    return store.dispatch(filterAction.get({
      search: '',
      searchBy: 'title',
      sortBy: 'title',
      sortOrder: 'asc',
      filter: [],
      offset: 0,
      limit: 18,
  })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
