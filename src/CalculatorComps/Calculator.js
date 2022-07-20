import React, { useState } from "react";
import { btns, BTN_ACTIONS } from "./btnConfig";
import "./_calculator.sass";

export const Calculator = () => {
  const [data, setData] = useState("");

  const btnClick = (btn) => {
    const ACTS = BTN_ACTIONS;
    console.log(btn);
    //Add num
    btn.action === ACTS.NUM ? setData(data + btn.value) : setData("0");
    //Clear & Clear All
    if (btn.action === ACTS.DELETE) {
      try {
        setData(data.slice(0, -1));
      } catch (error) {
        setData("");
      }
    }

    if (btn.action === ACTS.CLEAR) setData("");

    //Equal
    if (btn.action === ACTS.EQUAL) {
      try {
        setData(eval(data).toLocaleString("en"));
      } catch (error) {
        setData("Error");
      }
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <div className="history text-end">
          <p>sss</p>
        </div>
        <div className="result text-end text-light fs-2">
          <p>{data}</p>
        </div>
      </div>
      <div className="keypad">
        {btns.map((btn, index) => (
          <button
            key={index}
            className={btn.class}
            onClick={() => btnClick(btn)}
          >
            {btn.display}
          </button>
        ))}
      </div>
    </div>
  );
};
