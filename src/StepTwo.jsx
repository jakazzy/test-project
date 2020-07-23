import React from "react";

const StepTwo = () => {
  return (
    <div className="container personal-info">
      <form>
        <div className="form-group">
          <label htmlFor="bname">Business Name:</label>
          <input type="text" className="form-control" id="bname" />
        </div>
        <div className="form-group">
          <label htmlFor="locatn">Location of Business:</label>
          <input type="text" className="form-control" id="locatn" />
        </div>
        <div className="form-group">
          <label htmlFor="town">Town</label>
          <input type="text" className="form-control" id="town" />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input type="text" className="form-control" id="district" />
        </div>
        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <input type="text" className="form-control" id="region" />
        </div>

        <fieldset className="form-group">
          {/* <div className="row"> */}
          <legend className="col-form-label pt-0">
            Is your business registered?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
          {/* </div> */}
        </fieldset>

        <div className="form-group">
          <label htmlFor="reg">If yes state your registration number</label>
          <input type="text" className="form-control" id="reg" />
        </div>

        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            Do you have a business TIN number?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="tin">If yes, state your business TIN number</label>
          <input type="text" className="form-control" id="tin" />
        </div>

        <fieldset className="form-group">
          {/* <div className="row"> */}
          <legend className="col-form-label pt-0">
            Are you a member of a trade association in your locality?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
          {/* </div> */}
        </fieldset>

        <fieldset className="form-group">
          {/* <div className="row"> */}
          <legend className="col-form-label  pt-0">
            Do you NVTI certficate?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
          {/* </div> */}
        </fieldset>

        <fieldset className="form-group">
          {/* <div className="row"> */}
          <legend className="col-form-label pt-0">
            Have you received any support from NBSSI?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
          {/* </div> */}
        </fieldset>

        <fieldset className="form-group">
          {/* <div className="row"> */}
          <legend className="col-form-label  pt-0">
            If no, would you want to receive support from NBSSI?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
          {/* </div> */}
        </fieldset>
        {/* <button type="submit" className="btn btn-default">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default StepTwo;
