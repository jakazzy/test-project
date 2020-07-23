import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";
import "./stepone.css";

const StepTwo = () => {
  const { changeHandler } = useContext(FormContext);

  return (
    <div className="container personal-info">
      <form>
        <div className="form-group">
          <label htmlFor="bname">Business Name:</label>
          <input
            type="text"
            className="form-control"
            id="bname"
            name="business_name"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="locatn">Location of Business:</label>
          <input
            type="text"
            className="form-control"
            id="locatn"
            onChange={changeHandler}
            name="location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="town">Town</label>
          <input
            type="text"
            className="form-control"
            id="town"
            name="town"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            className="form-control"
            id="district"
            onChange={changeHandler}
            name="district"
          />
        </div>
        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <input
            type="text"
            className="form-control"
            id="region"
            onChange={changeHandler}
            name="region"
          />
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
                id="reg1"
                value="yes"
                onChange={changeHandler}
                name="registered"
                checked
              />
              <label className="form-check-label" htmlFor="reg1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="reg2"
                value="no"
                onChange={changeHandler}
                name="registered"
              />
              <label className="form-check-label" htmlFor="reg2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="reg">If yes state your registration number</label>
          <input
            type="text"
            className="form-control"
            id="reg"
            onChange={changeHandler}
            name="registered_no"
          />
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
                id="tin1"
                onChange={changeHandler}
                name="has_tin"
                value="yes"
                checked
              />
              <label className="form-check-label" htmlFor="tin1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="tin2"
                onChange={changeHandler}
                name="has_tin"
                value="no"
              />
              <label className="form-check-label" htmlFor="tin2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="tin">If yes, state your business TIN number</label>
          <input
            type="text"
            className="form-control"
            id="tin"
            onChange={changeHandler}
            name="tin_no"
          />
        </div>

        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            Are you a member of a trade association in your locality?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="assoc1"
                onChange={changeHandler}
                name="association_member"
                value="yes"
                checked
              />
              <label className="form-check-label" htmlFor="assoc1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="assoc2"
                value="no"
                onChange={changeHandler}
                name="association_member"
              />
              <label className="form-check-label" htmlFor="assoc2">
                No
              </label>
            </div>
          </div>
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
                id="nvti1"
                onChange={changeHandler}
                name="nvti_cert"
                value="yes"
                checked
              />
              <label className="form-check-label" htmlFor="nvti1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="nvti2"
                value="no"
                onChange={changeHandler}
                name="nvti_cert"
              />
              <label className="form-check-label" htmlFor="nvti2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            Have you received any support from NBSSI?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="nbssi1"
                value="yes"
                onChange={changeHandler}
                name="rcvd_nbssi_support"
                checked
              />
              <label className="form-check-label" htmlFor="nbssi1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="nbssi2"
                value="no"
                onChange={changeHandler}
                name="rcvd_nbssi_support"
              />
              <label className="form-check-label" htmlFor="nbssi2">
                No
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group">
          <legend className="col-form-label  pt-0">
            If no, would you want to receive support from NBSSI?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="support1"
                value="yes"
                onChange={changeHandler}
                name="want_nbssi_support"
                checked
              />
              <label className="form-check-label" htmlFor="support1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="support2"
                value="no"
                onChange={changeHandler}
                name="want_nbssi_support"
              />
              <label className="form-check-label" htmlFor="support2">
                No
              </label>
            </div>
          </div>
        </fieldset>
        <div className="form-group">
          <label htmlFor="supp">
            If yes, what kind of support do you need from NBSSI:
          </label>
          <input
            type="text"
            className="form-control"
            id="supp"
            onChange={changeHandler}
            name="support_description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="years">
            How many years have you been a Skilled Craft Person?:
          </label>
          <input
            type="number"
            className="form-control"
            id="years"
            onChange={changeHandler}
            name="years_practing"
          />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
