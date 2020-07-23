import React from "react";
import "./stepone.css";

function StepOne() {
  return (
    <div className="container personal-info">
      <form>
        <div class="form-group">
          <label htmlFor="name">Name of skilled craft person:</label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label htmlFor="tel">Contact Number:</label>
          <input type="tel" class="form-control" id="tel" />
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        {/* 
        <div class="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div> */}
        <button type="submit" class="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StepOne;
