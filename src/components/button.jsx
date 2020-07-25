import React from "react";
// import { FormContext } from "../context/FormContext";

const CustomButton = ({ children, ...otherProps }) => {
  //   const { buttonsState, setStepState, compState } = useContext(FormContext);

  //   const next = () => {
  //     console.log("this is you right?");
  //     return setStepState(compState + 1);
  //   };

  //   const previous = () =>
  //     setStepState(compState > 0 ? compState - 1 : compState);

  return (
    // <div>
    //   <button
    //     style={buttonsState.showPreviousBtn ? {} : { display: "none" }}
    //     onClick={previous}
    //     type="button"
    //   >
    //     Prev
    //   </button>

    //   <button
    //     style={buttonsState.showNextBtn ? {} : { display: "none" }}
    //     onClick={next}
    //     type="button"
    //   >
    //     Next
    //   </button>
    // </div>
    <button {...otherProps}> {children}</button>
  );
};

export default CustomButton;
