// @flow
import socketIOClient from 'socket.io-client';
import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_CLIENT_HELLO,
    IO_CLIENT_JOIN_ROOM,
    IO_SERVER_HELLO,
} from '../shared/config';

const socket = socketIOClient(window.location.host);

export default (store: Object) => {
    socket.on(IO_CONNECT, () => {
        console.log(store, window.location);
        console.log('[socket.io] Connected!');
        socket.emit(IO_CLIENT_JOIN_ROOM, 'hello-1234');
        socket.emit(IO_CLIENT_HELLO, 'Hello!');
    });

    socket.on(IO_SERVER_HELLO, (message: string) => {
        console.log(`[socket.io] Server: ${message}!`);
    });

    socket.on(IO_DISCONNECT, () => {
        console.log('[socket.io] Disconnected!');
    });
};
