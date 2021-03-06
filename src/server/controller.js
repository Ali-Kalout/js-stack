// @flow

export const homePage = (): any => null;

export const helloPage = (): Object => ({
    hello: {
        message: 'Server side preloaded message',
    },
});

export const helloAsyncPage = (): Object => ({
    hello: {
        messageAsync: 'Server side preloaded message for async page',
    },
});

export const helloEndpoint = (num: number): Object => ({
    serverMessage: `Hello from server! (received num = ${num})`,
});
