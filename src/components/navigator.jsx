import React, { useContext } from "react";
import { css, styled, setup } from "goober";
import { FormContext } from "../context/FormContext";
import "./navigator.css";

setup(React.createElement);

const Ol = styled("ol")`
  margin: 0;
  padding-bottom: 2.2rem;
  list-style-type: none;
`;

const LiClass = (props) => css`
  display: inline-block;
  text-align: center;
  line-height: 4.5rem;
  padding: 0 0.7rem;
  cursor: pointer;
  color: ${props.state === "todo" ? "silver" : "black"};
  border-bottom: 4px solid ${props.state === "todo" ? "silver" : "#33C3F0"};
  &:before {
    position: relative;
    bottom: -3.99rem;
    float: left;
    left: 50%;
    ${
      props.state === "todo"
        ? 'content: "\u039F";'
        : props.state === "doing"
        ? 'content: "\u2022";'
        : 'content: "\u2713";'
    }
    color: ${props.state === "todo" ? "silver" : "white"};
    background-color: ${props.state === "todo" ? "white" : "#33C3F0"};  
    width: 1.2em;
    line-height: ${props.state === "todo" ? "1.2em" : "1.4em"};
    border-radius: ${props.state === "todo" ? "0" : "1.2em"};
  }
  &:hover,
  &::before {
    color: #0FA0CE;
  }
  &:after {
    content: "\\00a0\\00a0";
  }   
  span {
    padding: 0 1.5rem;
  }
`;

const Navigator = (props) => {
  const { stylesState } = useContext(FormContext);

  // const handleOnClick = (evt) => {
  //   if (
  //     evt.currentTarget.value === props.steps.length - 1 &&
  //     compState === props.steps.length - 1
  //   ) {
  //     setStepState(props.steps.length);
  //   } else {
  //     setStepState(evt.currentTarget.value);
  //   }
  // };

  const stepName = (step) => {
    switch (step) {
      case 1:
        return "Profile";
      case 2:
        return "Business Info";
      case 3:
        return "Training experience";
      default:
        return "Submit form";
    }
  };

  const renderSteps = () =>
    props.steps.map((s, i) => (
      <li
        className={LiClass({ state: stylesState[i] })}
        // onClick={handleOnClick}
        key={i}
        value={i}
      >
        <span>{stepName(i + 1)}</span>
      </li>
    ));

  return <Ol> {renderSteps()}</Ol>;
};

//props for the steps

export default Navigator;
