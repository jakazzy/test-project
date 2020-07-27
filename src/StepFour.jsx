import React, { useEffect, useContext } from "react";
import { FormContext } from "./context/FormContext";

const StepFour = () => {
  const { addTrainer } = useContext(FormContext);
  useEffect(() => {
    async function addNewTrainer() {
      await addTrainer;
    }
    addNewTrainer();
  });
  return (
    <div className="container">
      <p className="text-center success-text font-weight-bold display-4">
        Form submitted Successfully
      </p>
    </div>
  );
};

export default StepFour;
