import React, { useState, useEffect } from "react";

const CountTracker = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getNextFriday = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const daysUntilNextFriday = 5 - currentDay + (currentDay >= 5 ? 7 : 0);

      const nextFriday = new Date(currentDate);
      nextFriday.setDate(currentDate.getDate() + daysUntilNextFriday);
      nextFriday.setHours(0o0, 0o0, 0o0, 0o0);

      return nextFriday.getTime();
    };

    const targetDate = getNextFriday();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    // Initial call to update the countdown
    updateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="my-0 flex justify-center gap-7 lg:gap-32 relative lg:top-10 bottom-10 font-bold opacity-70 animate-bounce lg:hover:text-red-900">
      <div className="countdown-unit mt-2">
        
        <div className="countdown-value text-center lg:text-7xl md:text-md sm:text-sm">
          {countdown.days}
          <div className="countdown-label lg:text-2xl md:text-md sm:text-sm font-extralight text-orange-500 underline">
          Days
        </div>
        </div>
      </div>
      <div className="countdown-unit m-2">
        
        <div className="countdown-value text-center lg:text-7xl md:text-md sm:text-sm">
          {countdown.hours}
          <div className="countdown-label lg:text-2xl md:text-md sm:text-sm font-extralight text-orange-500 underline">
          Hours
        </div>
        </div>
      </div>
      <div className="countdown-unit m-2">
        
        <div className="countdown-value text-center lg:text-7xl md:text-md sm:text-sm">
          {countdown.minutes}
          <div className="countdown-label lg:text-2xl md:text-md sm:text-sm font-extralight text-orange-500 underline">
          Minutes
        </div>
        </div>
      </div>
      <div className="countdown-unit my-2">
        
        <div className="countdown-value text-center lg:text-7xl md:text-md sm:text-sm">{countdown.seconds}</div>
        <div className="countdown-label lg:text-2xl md:text-md sm:text-sm font-extralight text-orange-500 underline">
          Seconds
        </div>
      </div>
    </div>
    </>
  );
};
export default CountTracker;