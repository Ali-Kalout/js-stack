// @flow
import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes';
import { APP_NAME } from '../config';

const handleClick = (): void => {
  $('body').scrollTop(0);
  $('.js-navbar-collapse').collapse('hide');
};

const Nav = (): React$Element<any> => (
  <nav
    className="navbar navbar-toggleable-md navbar-inverse fixed-top navbar-light bg-light"
    style={{ paddingLeft: 80, paddingRight: 80 }}
  >
    <div>
      <button
        className="navbar-toggler navbar-toggler-right btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".js-navbar-collapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      &nbsp;
      &nbsp;
      <Link to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>
    </div>
    <div className="js-navbar-collapse collapse navbar-collapse" style={{ backroundColor: 'gray' }}>
      <ul className="navbar-nav mr-auto">
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
        ].map((link) => (
          <li className="nav-item" key={link.route}>
            <Link
              to={link.route}
              className="nav-link"
              activeStyle={{ color: 'white' }}
              onClick={handleClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;
