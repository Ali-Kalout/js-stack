// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { createUseStyles } from 'react-jss';
import Modal from '../modal';
import { APP_NAME } from '../../config';

const useStyles = createUseStyles({
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  resizeMe: {
    '@media screen and (max-width: 800px)': {
      color: 'red',
    },
  },
  specialBtn: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
});

const HomePage = (): React$Element<any> => {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3 mb-4">{APP_NAME}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Bootstrap</h3>
            <p>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-primary"
              >
                Open Modal
              </button>
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">JSS</h3>
            <p className={classes.hoverMe}>Hover me!</p>
            <p className={classes.resizeMe}>Resize the window!</p>
            <button type="button" className={classes.specialBtn}>Composition</button>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Websockets</h3>
            <p>Open your browser console.</p>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default HomePage;
