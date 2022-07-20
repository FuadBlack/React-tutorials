import React, { useEffect, useRef, useState } from "react";
import "./_ageCalc.sass";

export const AgeCalculator = () => {
  const inputDay = useRef(null);
  const inputMnt = useRef(null);
  const inputYr = useRef(null);
  const [age, setAge] = useState("");
  const calculateAge = (e) => {
    let d1 = inputDay.current.value;
    let m1 = inputMnt.current.value;
    let y1 = inputYr.current.value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    setAge(`Your age is ${y} years ${m} months ${d} days`);
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <div className="ml-[20%]">
        <div
          className="card"
          style={{ maxWidth: "800px", height: "auto", padding: "100px" }}
        >
          <div className="card-title">
            <h3 className="text-dark text-center">Age Calculator</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div
                className="d-flex justify-content-center"
                style={{ gridGap: "20px" }}
              >
                <div className="form-group">
                  <label htmlFor="day" className="form-label text-primary">
                    Day
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="day"
                    id="day"
                    placeholder="dd"
                    ref={inputDay}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="month" className="form-label text-primary">
                    Month
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="month"
                    id="month"
                    placeholder="mm"
                    ref={inputMnt}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year" className="form-label text-primary">
                    Year
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="year"
                    id="year"
                    placeholder="yyy"
                    ref={inputYr}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={calculateAge}
                style={{ transform: "translate(180%,20px)" }}
              >
                Calculate Age
              </button>
            </form>
            <p style={{ transform: "translate(50px,50px)" }}>{age}</p>
          </div>
        </div>
    </div>
  );
};
