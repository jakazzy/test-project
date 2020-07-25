import React, { useContext, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { FormContext } from "./context/FormContext";
import "./stepone.css";

const StepTwo = () => {
  const { changeHandler, buttonsState, setStepState, compState } = useContext(
    FormContext
  );

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  useEffect(() => {
    const fetchData = async () => {
      const regionURL = `${process.env.REACT_APP_BASE_URL}`;
      const regions = await axios(regionURL);
      const { data } = regions;
      var keyHex = CryptoJS.enc.Base64.parse(process.env.REACT_APP_KEY);
      var decrypted = CryptoJS.DES.decrypt(
        {
          ciphertext: CryptoJS.enc.Base64.parse(data),
        },
        keyHex,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      const actualData = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
      console.log(actualData, "this is the data");
    };

    fetchData();
  }, []);

  return (
    <form>
      <div className="container personal-info">
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
            name="business_location"
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
            name="years_practicing"
          />
        </div>
        <div>
          <button
            style={buttonsState.showPreviousBtn ? {} : { display: "none" }}
            onClick={previous}
            type="button"
          >
            Prev
          </button>

          <button
            style={buttonsState.showNextBtn ? {} : { display: "none" }}
            // onClick={next}
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
