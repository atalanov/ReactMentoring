import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';


export default (initialState) => {
    const appStore = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return appStore;
};

