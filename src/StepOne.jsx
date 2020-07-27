import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./context/FormContext";
import "./stepone.css";
import { getGender } from "./api/api";

function StepOne() {
  const {
    data,
    changeHandler,
    buttonsState,
    setStepState,
    compState,
    setData,
    setItem,
  } = useContext(FormContext);

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const { register, handleSubmit, errors } = useForm();
  const [gen, setGen] = useState([]);

  const onSubmit = (result) => {
    setData({ ...data, ...result });
    setItem("string", { ...data, ...result });
    return setStepState(compState + 1);
  };
  useEffect(() => {
    async function fetchGender() {
      const gender = await getGender();
      setGen(gender);
    }
    fetchGender();
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container personal-info">
        <div className="form-group">
          <label htmlFor="name">Name of skilled craft person:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            name="trainer_name"
            ref={register({
              required: "name is required",
              minLength: {
                value: 2,
                message: "Name is too short",
              },
            })}
            defaultValue={data.trainer_name}
          />

          {errors.trainer_name && (
            <p className="error-message">{errors.trainer_name.message}</p>
          )}
        </div>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                {gen.map((gend) => (
                  <div key={gend.id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={gend.type}
                      id="gridRadios1"
                      value={gend.name}
                      onChange={changeHandler}
                      ref={register({ required: "gender is required" })}
                      defaultChecked={data[`${gend.name}`]}
                    />
                    <label className="form-check-label" htmlFor={gend.name}>
                      {gend.name}
                    </label>
                  </div>
                ))}
              </div>
              {errors.gender && (
                <p className="error-message">{errors.gender.message}</p>
              )}
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
            placeholder="Telephone number eg. 057xxxxxxx"
            onChange={changeHandler}
            ref={register({
              required: "contact is required",
              pattern: {
                value: /^(([2][3][3])|[0])?\d{9}$/i,
                message: "Invalid phone number",
              },
            })}
            defaultValue={data.telephone}
          />
          {errors.telephone && (
            <p className="error-message">{errors.telephone.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            id="email"
            onChange={changeHandler}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            defaultValue={data.email}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Ghana Post Digital Address:</label>
          <input
            type="address"
            className="form-control"
            name="digital_address"
            id="address"
            placeholder="Digital address"
            onChange={changeHandler}
            ref={register({ required: "address is required" })}
            defaultValue={data["digital_address"]}
          />
          {errors.digital_address && (
            <p className="error-message">{errors.digital_address.message}</p>
          )}
        </div>

        <div>{/* <input type="submit" value="Continue" /> */}</div>
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
            // onClick={next}
            type="submit"
            className="btn btn-primary nav-btn"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default StepOne;
