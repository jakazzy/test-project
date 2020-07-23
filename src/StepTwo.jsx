import React from "react";

const StepTwo = () => {
  return function StepOne() {
    return (
      <div>
        <form>
          <label htmlFor="name"> Name</label>
          <input type="text" id="name" />
        </form>
      </div>
    );
  };
};

export default StepTwo;
