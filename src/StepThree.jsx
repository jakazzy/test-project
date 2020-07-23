import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";

const StepThree = () => {
  const { data, changeHandler, submitHandler } = useContext(FormContext);

  return (
    <div className="container personal-info">
      <form onSubmit={submitHandler}>
        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            Have you trained apprentices before?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="apprentice"
                id="apprentice1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="apprentice1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="apprentice"
                id="apprentice2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="apprentice2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            If no, would you like to train apprentices?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="train"
                id="train1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="train1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="train"
                id="train2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="train2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="apprentc">
            How many apprentices can you take at a time?:
          </label>
          <input type="number" className="form-control" id="apprentc" />
        </div>

        <div className="form-group">
          <label htmlFor="tr-apprentc">
            What additional support would you need from NBSSI to be able to
            train apprentices?:
          </label>
          <input type="text" className="form-control" id="tr-apprentc" />
        </div>
        <button type="submit" onSubmit={submitHandler}>
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default StepThree;
