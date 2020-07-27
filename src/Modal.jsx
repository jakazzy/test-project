import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";

const Modal = () => {
  const { show, setShow } = useContext(FormContext);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className={"modal fade" + (show ? " show d-block" : " d-none")}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">
                REQUIREMENTS AND ELIGIBILTY
              </h5>
              <button type="button" className="close" onClick={handleShow}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Applicants must have the following: </p>
              <ul>
                <li>Business operating permit</li>
                <li>physical business location and well-equipped</li>
                <li>5 years experience as a skilled crafts person</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleShow}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
