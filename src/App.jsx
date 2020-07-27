import React, { useContext, useEffect } from "react";
import MultiStep from "./react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Modal from "./Modal";
import { FormContext } from "./context/FormContext";
import "./App.css";

const App = () => {
  const { show, getItem, setData, setShow } = useContext(FormContext);

  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <StepThree /> },
  ];

  let lsData;
  useEffect(() => {
    lsData = getItem("string");
    if (lsData) {
      setData({ ...lsData.data });
      setShow(false);
    }
  }, [lsData]);

  return (
    <div>
      <Modal />
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1 ">
            Skilled Crafts People Application Form
          </span>
        </div>
      </nav>
      <div className="container">
        <MultiStep showNavigation={true} steps={steps} />
      </div>
      <div
        className={"modal-backdrop fade" + (show ? " show d-block" : " d-none")}
      ></div>
    </div>
  );
};

export default App;
