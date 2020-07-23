import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";
import "./stepone.css";

// "trainer_name": "",
// "gender": "",
// "telephone": "",
// "email": "",
// "digital_address": "",

function StepOne() {
  const { data, changeHandler } = useContext(FormContext);
  return (
    <div className="container personal-info">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name of skilled craft person:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={changeHandler}
            name="trainer_name"
          />
        </div>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gridRadios1"
                  value="male"
                  onChange={changeHandler}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gridRadios2"
                  value="female"
                  onChange={changeHandler}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="tel">Contact Number:</label>
          <input
            type="tel"
            className="form-control"
            id="tel"
            name="telephone"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Ghana Post Digital Address:</label>
          <input
            type="address"
            className="form-control"
            name="digital_address"
            id="address"
            onChange={changeHandler}
          />
        </div>
        {/* <button type="submit" className="btn btn-default">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default StepOne;
