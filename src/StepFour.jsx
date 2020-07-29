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
      <p className="text-center success-text">
        confirm if all the details provided are correct before proceeding to
        submit
      </p>
      <p>Name: {trainer_name}</p>
      <p>Gender: {gender}</p>
      <p>Phone Number: {telephone}</p>
      <p>Email: {email}</p>
      <p>Address: {digital_address}</p>
      <p>Business Name: {business_name}</p>
      <p>Business Location: {business_location}</p>
      <p>Region: {region}</p>
      <p>district: {district}</p>
      <p>registered: {registered} </p>
      <p>registration number: {registration_no} </p>
      <p> Have Tin number: {has_tin} </p>
      <p> Tin Number:{tin_no} </p>
      <p> Association Member: {associaiton_member} </p>
      <p> NVTI certificate: {nvti_cert} </p>
      <p> Received NBSSI support Before(True/False): {rcvd_nbssi_support} </p>
      <p> Do you want NBSSI support: {want_nbssi_support} </p>
      <p> Support description: {support_description} </p>
      <p> Years practicing: {years_practicing} </p>
      <p> Trained Apprentice Before(Yes/No): {trained_apprentice}</p>
      <p> Do you want to train an apprentice: {want_train_apprentice}</p>
      <p> Number of apprentices: {no_apprentices}</p>
      <p> Additional Support: {additional_support}</p>
      <p></p>
      <p></p>
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
