// @flow
import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_CLIENT_JOIN_ROOM,
    IO_CLIENT_HELLO,
    IO_SERVER_HELLO,
} from '../shared/config';

export default (io: Object) => {
    io.on(IO_CONNECT, (socket: Object) => {
        console.log('[socket.io] Client connected!');

        socket.on(IO_CLIENT_JOIN_ROOM, (room: string) => {
            socket.join(room);
            console.log(`[socket.io] Client joined room ${room}!`);

            io.emit(IO_SERVER_HELLO, 'Hello everyone from server!'); // all clients
            io.to(room).emit(IO_SERVER_HELLO, `Hello clients from room ${room}!`); // only clients in this room
            socket.emit(IO_SERVER_HELLO, 'Hello you!'); // only this client
        });

        socket.on(IO_CLIENT_HELLO, (message: string) => {
            console.log(`[socket.io] Client said: ${message}`);
        });

        socket.on(IO_DISCONNECT, () => {
            console.log('[socket.io] Client disconnected!');
        });
    });
};
