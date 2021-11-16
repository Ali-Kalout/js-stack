// @flow
import axios from 'axios';
import { createAction } from 'redux-actions';
import { helloEndpointRoute } from '../routes';

export const SAY_HELLO = 'SAY_HELLO';
export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST';
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS';
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE';

export const sayHello: any = createAction(SAY_HELLO);
export const sayHelloAsyncRequest: any = createAction(SAY_HELLO_ASYNC_REQUEST);
export const sayHelloAsyncSuccess: any = createAction(SAY_HELLO_ASYNC_SUCCESS);
export const sayHelloAsyncFailure: any = createAction(SAY_HELLO_ASYNC_FAILURE);

export const sayHelloAsync: any = (num: number) => async (dispatch: any) => {
    dispatch(sayHelloAsyncRequest());

    try {
        const res = await axios.get(helloEndpointRoute(num));

        if (!res.data.serverMessage) {
            throw Error('No server message');
        }

        dispatch(sayHelloAsyncSuccess(res.data.serverMessage));
    } catch (error) {
        dispatch(sayHelloAsyncFailure());
    }
};
