// @flow
import React from 'react';

const Modal = (): React$Element<any> => (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Title</h5>
          <button
            type="button"
            className="close btn"
            data-bs-dismiss="modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          This is a Bootstrap modal. It uses jQuery!
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
