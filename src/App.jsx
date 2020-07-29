import React, { useContext, useEffect } from "react";
import MultiStep from "./react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Modal from "./components/Modal";
import { FormContext } from "./context/FormContext";
import "./App.css";
import StepFour from "./StepFour";

const App = () => {
  const { show, getItem, setData, setShow } = useContext(FormContext);

  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <StepThree /> },
    { name: "StepFour", component: <StepFour /> },
  ];

  let lsData;
  useEffect(() => {
    // eslint-disable-next-line
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
