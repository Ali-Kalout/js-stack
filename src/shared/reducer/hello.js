// @flow
import * as Immu from 'immutable';

import {
    SAY_HELLO,
    SAY_HELLO_ASYNC_REQUEST,
    SAY_HELLO_ASYNC_SUCCESS,
    SAY_HELLO_ASYNC_FAILURE,
} from '../action/hello';

const initialState = Immu.fromJS({
    messageAsync: 'Initial reducer message for async call',
});

const helloReducer: any = (state: any = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SAY_HELLO:
            return state.set('message', action.payload);
          case SAY_HELLO_ASYNC_REQUEST:
            console.log('shi');
            return state.set('messageAsync', 'Loading...');
          case SAY_HELLO_ASYNC_SUCCESS:
            console.log(action.payload);
            return state.set('messageAsync', action.payload);
          case SAY_HELLO_ASYNC_FAILURE:
            return state.set('messageAsync', 'No message received, please check your connection');
          default:
            return state;
    }
};

export default helloReducer;
