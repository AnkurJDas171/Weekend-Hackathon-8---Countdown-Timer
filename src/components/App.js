import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState();

  const handelKeyDown = (event) => {
    let value = event.target.value;
    if (event.keyCode !== 13) {
      return;
    }
    if (!isNaN(value) && parseInt(value) >= 0) {
      let number = parseInt(value);
      setTime(number);
      return;
    }

    setTime(0);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (time && time > 0) {
        let reducedTime = time - 1;
        setTime(reducedTime);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handelKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
