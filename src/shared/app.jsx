// @flow
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Nav from './components/nav';
import HomePage from './components/pages/home';
import HelloPage from './components/pages/hello';
import HelloAsyncPage from './components/pages/hello-async';
import NotFoundPage from './components/pages/not-found';
import Footer from './components/footer';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes';
import { APP_NAME } from './config';

const App = (): React$Element<any> => (
  <div style={{ paddingTop: 54 }}>
    <Nav />
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} element={<HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} element={<HelloAsyncPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
