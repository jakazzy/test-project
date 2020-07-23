import React from "react";
import "./stepone.css";

function StepOne() {
  return (
    <div className="container personal-info">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name of skilled craft person:</label>
          <input type="text" className="form-control" id="name" />
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
                  checked
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
          <input type="tel" className="form-control" id="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Ghana Post Digital Address:</label>
          <input type="address" className="form-control" id="address" />
        </div>
        {/* <button type="submit" className="btn btn-default">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default StepOne;
