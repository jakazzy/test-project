import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./context/FormContext";
import { useForm } from "react-hook-form";
import { getRegions, getDistricts } from "./api/api";
import { regionData } from "./data/data";
import "./stepone.css";

const StepTwo = () => {
  const [districts, setDistricts] = useState([]);
  const [regions, setRegions] = useState([]);
  const {
    data,
    setData,
    changeHandler,
    buttonsState,
    setStepState,
    compState,
    setItem,
  } = useContext(FormContext);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (result) => {
    console.log(result, "i see you");
    setData({ ...data, ...result });
    setItem("string", { ...data, ...result });
    return setStepState(compState + 1);
  };

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const changeRegion = async (event) => {
    const reg = regionData[event.target.value];
    const currDist = await getDistricts(reg);
    setDistricts(currDist);
  };

  useEffect(() => {
    async function fetchData() {
      const regionsData = await getRegions();
      const dist = await getDistricts("AH");
      setDistricts(dist);
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
            placeholder="Business name "
            onChange={changeHandler}
            ref={register({ required: "business name is required" })}
            defaultValue={data.business_name}
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
            placeholder="Business location"
            onChange={changeHandler}
            name="business_location"
            ref={register({ required: "business location is required" })}
            defaultValue={data.business_location}
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
            placeholder="Town"
            onChange={changeHandler}
            ref={register({ required: "town is required" })}
            defaultValue={data.town}
          />
          {errors.town && (
            <p className="error-message">{errors.town.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <select
            className="form-control"
            id="region"
            name="region"
            placeholder="Region"
            ref={register({ required: "region is required" })}
            defaultValue={data.region}
            onChange={changeRegion}
          >
            {regions.map((region) => (
              <option key={region.code} value={region.code} val={region.code}>
                {region.name}
              </option>
            ))}
          </select>
          {errors.region && (
            <p className="error-message">{errors.region.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="district">District:</label>
          <select
            className="form-control"
            name="district"
            placeholder="district"
            id="district"
            ref={register({ required: "district is required" })}
            onChange={changeHandler}
            defaultValue={data.district}
          >
            {districts.map((district) => (
              <option key={district.id} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>

          {errors.district && (
            <p className="error-message">{errors.district.message}</p>
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
                value="Y"
                onChange={changeHandler}
                name="registered"
                ref={register({
                  required: "business registration confirmation is required",
                })}
                defaultChecked={data.registered}
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
                value="N"
                onChange={changeHandler}
                name="registered"
                ref={register({
                  required: "business registration confirmation is required",
                })}
                defaultChecked={data.registered}
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
          <textarea
            type="text"
            className="form-control"
            id="reg"
            rows="3"
            onChange={changeHandler}
            name="registration_no"
            ref={register()}
            defaultValue={data.registered_no}
            placeholder="registration number"
          ></textarea>
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
                value="Y"
                ref={register({
                  required: "Tin number confirmation is required",
                })}
                defaultChecked={data.has_tin}
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
                value="N"
                ref={register({
                  required: "Tin number confirmation is required",
                })}
                defaultChecked={data.has_tin}
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
          <textarea
            type="text"
            className="form-control"
            rows="3"
            id="tin"
            placeholder="tin number"
            onChange={changeHandler}
            name="tin_no"
            ref={register()}
            defaultValue={data.tin_no}
          ></textarea>
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
                value="Y"
                ref={register({
                  required:
                    "response for trade association member enquiry required",
                })}
                defaultChecked={data.association_member}
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
                value="N"
                onChange={changeHandler}
                name="association_member"
                ref={register({
                  required:
                    "response for trade association member enquiry required",
                })}
                defaultChecked={data.association_member}
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
                value="Y"
                ref={register({
                  required: "response for NVTI certficate required",
                })}
                defaultChecked={data.nvti_cert}
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
                value="N"
                onChange={changeHandler}
                name="nvti_cert"
                ref={register({
                  required: "response for NVTI certificate required",
                })}
                defaultChecked={data.nvti_cert}
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
                value="Y"
                onChange={changeHandler}
                name="rcvd_nbssi_support"
                ref={register({
                  required: "response for NBSSI support enquiry required",
                })}
                defaultChecked={data.rcvd_nbssi_support}
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
                value="N"
                onChange={changeHandler}
                name="rcvd_nbssi_support"
                ref={register({
                  required: "response for NBSSI support enquiry required",
                })}
                defaultChecked={data.rcvd_nbssi_support}
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
                value="Y"
                onChange={changeHandler}
                name="want_nbssi_support"
                ref={register({
                  required: "NBSSI support enquiry required",
                })}
                defaultChecked={data.want_nbssi_support}
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
                value="N"
                onChange={changeHandler}
                name="want_nbssi_support"
                ref={register({
                  required: "NBSSI support enquiry required",
                })}
                defaultChecked={data.want_nbssi_support}
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
          <textarea
            type="text"
            className="form-control"
            id="supp"
            rows="3"
            onChange={changeHandler}
            name="support_description"
            ref={register()}
            defaultValue={data.support_description}
          ></textarea>
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
            placeholder="years of experience"
            ref={register({
              required:
                "years of experience as a skilled craft person required",
            })}
            defaultValue={data.years_practicing}
          />
          {errors.years_practicing && (
            <p className="error-message">{errors.years_practicing.message}</p>
          )}
        </div>
        <div className="buttons">
          <button
            style={buttonsState.showPreviousBtn ? {} : { display: "none" }}
            onClick={previous}
            type="button"
            className="btn btn-primary nav-btn"
          >
            Prev
          </button>

          <button
            style={buttonsState.showNextBtn ? {} : { display: "none" }}
            type="submit"
            className="btn btn-primary nav-btn"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
