import React from "react";
import Form from "./Form";
import FormContextProvider from "./context/FormContext";

const App = () => {
  return (
    <div className="container">
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </div>
  );
};

export default App;
