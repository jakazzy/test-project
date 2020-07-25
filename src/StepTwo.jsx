import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context/FormContext";
import { useForm } from "react-hook-form";
import { getRegions } from "./api/api";
import { getDistricts } from "./api/api";
import "./stepone.css";

const StepTwo = () => {
  const [districts, setDistricts] = useState([]);
  const [regions, setRegions] = useState([]);
  const { changeHandler, buttonsState, setStepState, compState } = useContext(
    FormContext
  );

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "*******************");
    return setStepState(compState + 1);
  };

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  useEffect(() => {
    async function fetchData() {
      const regionsData = await getRegions();
      const districtsData = await getDistricts("AH");
      console.log(regionsData, "***************");
      console.log(districtsData, "&&&&&&&&&&&&&&&&&&");
      setDistricts(districtsData);
      setRegions(regionsData);
    }
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container personal-info">
        <div className="form-group">
          <label htmlFor="bname">Business Name:</label>
          <input
            type="text"
            className="form-control"
            id="bname"
            name="business_name"
            onChange={changeHandler}
            ref={register({ required: "business name is required" })}
          />
          {errors.business_name && (
            <p className="error-message">{errors.business_name.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="locatn">Location of Business:</label>
          <input
            type="text"
            className="form-control"
            id="locatn"
            onChange={changeHandler}
            name="business_location"
            ref={register({ required: "business location is required" })}
          />
          {errors.business_location && (
            <p className="error-message">{errors.business_location.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="town">Town</label>
          <input
            type="text"
            className="form-control"
            id="town"
            name="town"
            onChange={changeHandler}
            ref={register({ required: "town is required" })}
          />
          {errors.town && (
            <p className="error-message">{errors.town.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            className="form-control"
            id="district"
            onChange={changeHandler}
            name="district"
            ref={register({ required: "district is required" })}
          />
          {errors.district && (
            <p className="error-message">{errors.district.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <select
            className="form-control"
            id="region"
            name="region"
            ref={register({ required: "region is required" })}
          >
            {regions.map((region) => (
              <option
                key={region.code}
                onChange={changeHandler}
                value={region.name}
              >
                {region.name}
              </option>
            ))}
          </select>
          {errors.region && (
            <p className="error-message">{errors.region.message}</p>
          )}
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
                ref={register({
                  required: "business registration confirmation is required",
                })}
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
                ref={register({
                  required: "business registration confirmation is required",
                })}
              />
              <label className="form-check-label" htmlFor="reg2">
                No
              </label>
            </div>
            {errors.registered && (
              <p className="error-message">{errors.registered.message}</p>
            )}
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
            ref={register()}
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
                ref={register({
                  required: "Tin number confirmation is required",
                })}
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
                ref={register({
                  required: "Tin number confirmation is required",
                })}
              />
              <label className="form-check-label" htmlFor="tin2">
                No
              </label>
            </div>
            {errors.has_tin && (
              <p className="error-message">{errors.has_tin.message}</p>
            )}
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
            ref={register()}
          />
          {errors.tin_no && (
            <p className="error-message">{errors.tin_no.message}</p>
          )}
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
                ref={register({
                  required:
                    "response for trade association member enquiry required",
                })}
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
                ref={register({
                  required:
                    "response for trade association member enquiry required",
                })}
              />
              <label className="form-check-label" htmlFor="assoc2">
                No
              </label>
            </div>
            {errors.association_member && (
              <p className="error-message">
                {errors.association_member.message}
              </p>
            )}
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
                ref={register({
                  required: "response for NVTI certficate required",
                })}
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
                ref={register({
                  required: "response for NVTI certificate required",
                })}
              />
              <label className="form-check-label" htmlFor="nvti2">
                No
              </label>
            </div>
            {errors.nvti_cert && (
              <p className="error-message">{errors.nvti_cert.message}</p>
            )}
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
                ref={register({
                  required: "response for NBSSI support enquiry required",
                })}
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
                ref={register({
                  required: "response for NBSSI support enquiry required",
                })}
              />
              <label className="form-check-label" htmlFor="nbssi2">
                No
              </label>
            </div>
            {errors.rcvd_nbssi_support && (
              <p className="error-message">
                {errors.rcvd_nbssi_support.message}
              </p>
            )}
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
                ref={register({
                  required: "NBSSI support enquiry required",
                })}
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
                ref={register({
                  required: "NBSSI support enquiry required",
                })}
              />
              <label className="form-check-label" htmlFor="support2">
                No
              </label>
            </div>
            {errors.want_nbssi_support && (
              <p className="error-message">
                {errors.want_nbssi_support.message}
              </p>
            )}
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
            ref={register()}
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
            ref={register({
              required:
                "years of experience as a skilled craft person required",
            })}
          />
          {errors.years_practicing && (
            <p className="error-message">{errors.years_practicing.message}</p>
          )}
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
