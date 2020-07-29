import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./context/FormContext";

const StepThree = () => {
  const {
    data,
    setData,
    changeHandler,
    buttonsState,
    setStepState,
    compState,
    // addTrainer,
    setItem,
    clearAll,
  } = useContext(FormContext);

  const { register, handleSubmit, errors } = useForm();

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const onSubmit = (result) => {
    setData({ ...data, ...result });
    setItem("string", { ...data, ...result });
    // const send = async () => await addTrainer();
    clearAll();
    // send();
    return setStepState(compState + 1);
  };

  // useEffect(() => {
  //   const send = async () => await addTrainer();
  //   swal({
  //     title: "Good job!",
  //     text: "Form has been successfully submited!",
  //     icon: "success",
  //   });
  //   send();
  // }, [addTrainer]);

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
                value="Y"
                onChange={changeHandler}
                ref={register({
                  required:
                    "response on experience training apprentices required",
                })}
                defaultChecked={data.trained_apprentice}
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
                value="N"
                onChange={changeHandler}
                ref={register({
                  required:
                    "response on experience training apprentices required",
                })}
                defaultChecked={data.trained_apprentice}
              />
              <label className="form-check-label" htmlFor="apprentice2">
                No
              </label>
            </div>
            {errors.trained_apprentice && (
              <p className="error-message">
                {errors.errors.trained_apprentice.message}
              </p>
            )}
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
                value="Y"
                name="want_train_apprentice"
                onChange={changeHandler}
                ref={register()}
                defaultChecked={data.want_train_apprentice}
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
                value="N"
                name="want_train_apprentice"
                onChange={changeHandler}
                ref={register()}
                defaultChecked={data.want_train_apprentice}
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
            placeholder="Number of apprentices"
            name="no_apprentices"
            onChange={changeHandler}
            ref={register({
              required:
                "response on number of apprentices that can be taken required",
            })}
            defaultValue={data.no_apprentices}
          />
          {errors.no_apprentices && (
            <p className="error-message">{errors.no_apprentices.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tr-apprentc">
            What additional support would you need from NBSSI to be able to
            train apprentices?:
          </label>
          <textarea
            type="text"
            className="form-control"
            rows="3"
            id="tr-apprentc"
            name="additional_support"
            onChange={changeHandler}
            placeholder="additional support"
            ref={register()}
            defaultValue={data.additional_support}
          ></textarea>
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
// remeber to do validation especially the numbers, alphanumeric, etc
// Ashanti
export default StepThree;
