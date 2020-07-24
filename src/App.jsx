import React from "react";
import MultiStep from "./react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
// import FormContextProvider from "./context/FormContext";

const App = () => {
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <StepThree /> },
    { name: "StepFour", component: <StepFour /> },
  ];

  return (
    <div className="container">
      {/* <FormContextProvider> */}
      <MultiStep showNavigation={true} steps={steps} />
      {/* </FormContextProvider> */}
    </div>
  );
};

export default App;
