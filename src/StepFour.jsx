import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";
import swal from "sweetalert";

const StepFour = () => {
  const {
    addTrainer,
    data,
    buttonsState,
    setStepState,
    compState,
  } = useContext(FormContext);
  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const handleSubmit = () => {
    const send = () => {
      addTrainer();
      swal({
        title: "Good job!",
        text: "Form has been successfully submited!",
        icon: "success",
      });
    };
    send();
  };
  const {
    trainer_name,
    gender,
    telephone,
    email,
    digital_address,
    business_name,
    town,
    business_location,
    region,
    district,
    registered,
    registration_no,
    has_tin,
    tin_no,
    associaiton_member,
    nvti_cert,
    rcvd_nbssi_support,
    want_nbssi_support,
    support_description,
    years_practicing,
    trained_apprentice,
    want_train_apprentice,
    no_apprentices,
    additional_support,
  } = data;
  return (
    <div className="container">
      <h5 className="success-text font-weight-bold">
        Kindly confirm if all the details provided are correct before proceeding
        to submit the form
      </h5>
      <div className="container">
        <p>Name of Skilled Craft Person: {trainer_name}</p>
        <p>Gender: {gender}</p>
        <p>Contact Number: {telephone}</p>
        <p>Email Address: {email}</p>
        <p>Ghana Post Digital Address: {digital_address}</p>
        <p>Business Name: {business_name}</p>
        <p>Business Location: {business_location}</p>
        <p>Town: {town}</p>
        <p>Region: {region}</p>
        <p>District: {district}</p>
        <p>Is your business registered: {registered} </p>
        <p>If yes state your registration number: {registration_no} </p>
        <p> Do you have a business TIN number: {has_tin} </p>
        <p> If yes, state your business TIN Number:{tin_no} </p>
        <p>
          Are you a member of a trade association in your locality?:
          {associaiton_member}
        </p>
        <p> NVTI certificate: {nvti_cert} </p>
        <p> Have you received any support from NBSSI?: {rcvd_nbssi_support} </p>
        <p>
          {" "}
          If no, would you want to receive support from NBSSI?:{" "}
          {want_nbssi_support}{" "}
        </p>
        <p>
          {" "}
          If yes, what kind of support do you need from NBSSI::{" "}
          {support_description}{" "}
        </p>
        <p>
          {" "}
          How many years have you been a Skilled Craft Person?:{" "}
          {years_practicing}{" "}
        </p>
        <p> Have you trained apprentices before?: {trained_apprentice}</p>
        <p>
          {" "}
          If no, would you like to train apprentices?: {want_train_apprentice}
        </p>
        <p> How many apprentices can you take at a time?: {no_apprentices}</p>
        <p>
          {" "}
          What additional support would you need from NBSSI to be able to train
          apprentices?: {additional_support}
        </p>
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
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary nav-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
