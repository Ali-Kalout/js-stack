/* eslint-disable react/jsx-indent */
// @flow

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { SheetsRegistry, JssProvider } from 'react-jss';
import initStore from './init-store';
import App from '../shared/app';
import {
	APP_CONTAINER_CLASS,
	STATIC_PATH,
	WDS_PORT,
	JSS_SSR_CLASS,
} from '../shared/config';
import { isProd } from '../shared/util';

const renderApp = (location: string, plainState: ?Object, routerContext: ?Object = {}): string => {
	const store = initStore(plainState);
	const sheets = new SheetsRegistry();
	const appHTML = ReactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter location={location} context={routerContext}>
				<JssProvider registry={sheets}>
					<App />
				</JssProvider>
			</StaticRouter>
		</Provider>,
	);
	const head = Helmet.rewind();

	return (
		`<!doctype html>
		<html>
		<head>
			${head.title}
			${head.meta}
			<meta name=viewport content="width=device-width,initial-scale=1">
			<link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css"> <!-- not working so got cdn -->
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
				rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
					crossorigin="anonymous">
			<style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
		</head>
		<body>
			<div class="${APP_CONTAINER_CLASS}">${appHTML}</div>
			<script>
			window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
			</script>
			<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
					crossorigin="anonymous"></script> <!-- jQuery cdn -->
		</body>
		</html>`
	);
};

export default renderApp;
