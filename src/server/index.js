import compression from 'compression';
import express from 'express';
import cors from 'cors';
import { Server } from 'http';
import socketIO from 'socket.io';
import routing from './routing';
import { STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import setUpSocket from './socket';

const app = express();
const http = Server(app);
const io = socketIO(http);

setUpSocket(io);

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

routing(app);

http.listen(WEB_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)'
        : '(development).\nKeep "npm run dev:wds" running in another terminal'}.`);
});
