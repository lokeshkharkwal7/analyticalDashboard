import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// importing redux reducers
import {
  addInputContinious,
  addInputLabels,
} from "./redux/slicers/inputslicer";
import Sidebar from "./sidebar";

function InputNavbar() {
  const labels = [
    "end_year",
    "sector",
    "topic",
    "insight",
    "region",
    "start_year",
    "impact",
    "added",
    "published",
    "country",
    "pestle",
    "source",
    "title",
  ]; // these are the labels or categorical variables
  const continious = ["intensity", "relevance", "likelihood"]; // these are the contimious variables
  const inputData = useSelector((state) => {
    return state.INPUTDATA;
  });
  const dispatch = useDispatch();
  //   saving the values of the form to a new state

  const onchange = (e) => {
    e.preventDefault();
    if (e.target.name === "label") {
      dispatch(addInputLabels(e.target.value));
    } else if (e.target.name === "continious") {
      dispatch(addInputContinious(e.target.value));
    }
  };

  const clicked = () => {
    // console.log("Checkig if redux state is working fine or not");
    // console.log(inputData.labels);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-computer-mouse"></i> Inputs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex ">
                <select
                  className="form-select text-secondary mx-2"
                  aria-label="Default select example"
                  style={{ width: "100%" }}
                  onChange={onchange}
                  name="label"
                >
                  <option value="">Label</option>

                  {labels.map((label) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select text-secondary"
                  aria-label="Default select example"
                  style={{ width: "12rem" }}
                  onChange={onchange}
                  name="continious"
                >
                  <option value="">Continious Type</option>

                  {continious.map((label) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </form>

              <Sidebar/>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default InputNavbar;
