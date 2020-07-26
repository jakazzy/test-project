import React from "react";
import MultiStep from "./react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import "./App.css";

const App = () => {
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <StepThree /> },
    { name: "StepFour", component: <StepFour /> },
  ];

  return (
    <div>
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
    </div>
  );
};

export default App;
