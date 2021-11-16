// @flow
import React from 'react';
import { APP_NAME } from '../config';

const Footer = (): React$Element<any> => (
  <div className="container mt-5">
    <hr />
    <footer>
      <p>
        @&nbsp;
        {APP_NAME}
        &nbsp;
        {new Date().getFullYear()}
      </p>
    </footer>
  </div>
);

export default Footer;
