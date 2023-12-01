'use client'
import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = new Date('December 1, 2024') - new Date();
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

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {time.days !== undefined ? (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p>{time.days}:</p>
          <p>{time.hours}:</p>
          <p>{time.minutes}:</p>
          <p>{time.seconds}</p>
        </div>
      ) : (
        <p>Countdown expired!</p>
      )}
    </div>
  );
};

export default Countdown;