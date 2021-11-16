// @flow
import Immutable from 'immutable';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import helloReducer from '../shared/reducer/hello';

const initStore = (plainState: ?Object): any => {
    const preloadedState = {};

    if (plainState && plainState?.hello) {
        // flow-disable-incompatible-use
        preloadedState.hello = helloReducer(undefined, {})
            .merge(Immutable.fromJS(plainState.hello));
    }

    return createStore(
        combineReducers({ hello: helloReducer }),
        preloadedState,
        applyMiddleware(thunk),
    );
};

export default initStore;
