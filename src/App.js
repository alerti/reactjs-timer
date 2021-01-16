import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span >
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="wedding">
      <h1>Florence and Peter {year} Countdown</h1>
      <div className="time">
      <p key ={timeLeft.days}>{timerComponents.length ? 
      timerComponents :
       <span>Time's up!</span>}</p>
       </div>
    </div>
  );
}

export default App;
