import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FormContextProvider from "./context/FormContext";

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
     <App />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



