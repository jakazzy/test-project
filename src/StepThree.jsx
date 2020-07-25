import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./context/FormContext";

const StepThree = () => {
  const { changeHandler, buttonsState, setStepState, compState } = useContext(
    FormContext
  );

  const { register, handleSubmit, errors } = useForm();
  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const onSubmit = (data) => {
    console.log(data, "*********************");
    return setStepState(compState + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container personal-info">
        <fieldset className="form-group">
          <legend className="col-form-label pt-0">
            Have you trained apprentices before?{" "}
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="trained_apprentice"
                id="apprentice1"
                value="yes"
                onChange={changeHandler}
              />
              <label className="form-check-label" htmlFor="apprentice1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="trained_apprentice"
                id="apprentice2"
                value="no"
                onChange={changeHandler}
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
                id="train1"
                value="yes"
                name="want_train_apprentice"
                onChange={changeHandler}
              />
              <label className="form-check-label" htmlFor="train1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="train2"
                value="no"
                name="want_train_apprentice"
                onChange={changeHandler}
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
          <input
            type="number"
            className="form-control"
            id="apprentc"
            name="no_apprentices"
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tr-apprentc">
            What additional support would you need from NBSSI to be able to
            train apprentices?:
          </label>
          <input
            type="text"
            className="form-control"
            id="tr-apprentc"
            name="additional_support"
            onChange={changeHandler}
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

export default StepThree;
