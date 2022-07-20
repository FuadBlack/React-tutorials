import React, { useState } from "react";
import "./_bmi.sass";

export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");
  const [status, setStatus] = useState("");
  const [bmiresult, setBmiresult] = useState(null);

  const calculateBmi = (e) => {
    let bmi = (weight / (height / 100) ** 2).toLocaleString(2);
    setBmiresult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);
    setHeight("");
    setweight("");
    e.preventDefault();
  };

  const getStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  return (
    <div className="ml-[20%] ">
      <div
        className="card"
        style={{ maxWidth: "800px", height: "auto", padding: "100px" }}
      >
        <div className="card-title">
          <h3 className="text-dark text-center">BMI Calculator</h3>
        </div>
        <div className="card-body">
          <form action="">
            <div className="form-group mb-4">
              <label htmlFor="height" className="form-label text-primary">
                Height
              </label>
              <input
                className="form-control"
                type="text"
                name="height"
                id="height"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                // ref={inputDay}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight" className="form-label text-primary">
                Weight
              </label>
              <input
                className="form-control"
                type="text"
                name="weight"
                id="weight"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}

                //  ref={inputMnt}
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={calculateBmi}
              style={{ transform: "translate(50%,40px)" }}
            >
              Calculate BMI
            </button>
          </form>

          {bmiresult && (
            <div className="mt-5">
              <p>Your BMI is :{bmiresult}</p>
              <p>You are curerently: {status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
