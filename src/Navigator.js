import React from "react";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/calculator" className="nav-link text-dark">
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link to="agecalculator" className="nav-link text-dark">
                  Age Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bmicalculator" className="nav-link text-dark">
                  BMI calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/searchapp" className="nav-link text-dark">
                  Search App
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/todoList" className="nav-link text-dark">
                  Todo List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
