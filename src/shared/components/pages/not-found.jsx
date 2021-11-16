// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../routes';

const title = 'Page Not Found';

const NotFoundPage = (): React$Element<any> => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page was not found' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <div>
          <Link to={HOME_PAGE_ROUTE}>Go to homepage</Link>
          .
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
