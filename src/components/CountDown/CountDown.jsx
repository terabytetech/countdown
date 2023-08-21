import React, { useState, useEffect, useMemo } from "react";
import "./CountDown.scss";
const CountDown = () => {
  const getTimeRemaining = (endTime) => {
    const total = endTime - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const targetDate = useMemo(() => new Date("2023-10-13T00:00:00"), []); // Set your target date here

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = getTimeRemaining(targetDate);
      setTimeLeft(remainingTime);

      if (remainingTime.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-wrapper__contents">
        <div className="days time">
          <p>{timeLeft.days}</p>
          <span>days</span>
        </div>
        <div className="hours time">
          <p>{timeLeft.hours}</p>
          <span>hours</span>
        </div>
        <div className="minutes time">
          <p>{timeLeft.minutes}</p>
          <span>minutes</span>
        </div>
        <div className="seconds time">
          <p>{timeLeft.seconds}</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
