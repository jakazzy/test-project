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
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      <div className="container">
        <MultiStep showNavigation={true} steps={steps} />
      </div>
    </div>
  );
};

export default App;
