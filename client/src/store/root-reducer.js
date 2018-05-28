import { combineReducers } from 'redux';
import { reducer as movieListReducer } from '../MovieList';

const rootReducer = combineReducers({ movieListReducer });

export default rootReducer;
