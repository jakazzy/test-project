import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./context/FormContext";
import "./stepone.css";
import { getGender } from "./api/api";

function StepOne() {
  const { changeHandler, buttonsState, setStepState, compState } = useContext(
    FormContext
  );

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const { register, handleSubmit, errors } = useForm();
  const [gen, setGen] = useState([]);

  const onSubmit = (data) => {
    console.log(data, "*********************");
    return setStepState(compState + 1);
  };
  useEffect(() => {
    async function fetchGender() {
      const gender = await getGender();
      setGen(gender);
      console.log(gender);
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
            onChange={changeHandler}
            name="trainer_name"
            ref={register({ required: "name is required" })}
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
                    />
                    <label className="form-check-label" htmlFor="male">
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
            onChange={changeHandler}
            ref={register({ required: "contact is required" })}
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
            id="email"
            onChange={changeHandler}
            ref={register({ required: "email address id required" })}
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
            onChange={changeHandler}
            ref={register({ required: "address is required" })}
          />
          {errors.digital_address && (
            <p className="error-message">{errors.digital_address.message}</p>
          )}
        </div>

        <div>{/* <input type="submit" value="Continue" /> */}</div>
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
}

export default StepOne;
