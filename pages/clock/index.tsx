import { useEffect, useState } from "react";

interface TimeTypes {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Clock() {
  const [time, setTime] = useState<TimeTypes>({} as TimeTypes);

  useEffect(() => {
    const clockTime = setInterval(() => {
      const now = new Date();

      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });

      clearInterval(clockTime);
    }, 1000);
  }, [time]);

  return (
    <>
      <h1>Relogio</h1>
      <span
        style={{
          display: "flex",
          fontSize: "2rem",
          fontWeight: "bold"
        }}
      >
        <p>{time.hours <= 9 ? `0${time.hours}` : time.hours}:</p>
        <p>{time.minutes <= 9 ? `0${time.minutes}` : time.minutes}:</p>
        <p>{time.seconds <= 9 ? `0${time.seconds}` : time.seconds}</p>
      </span>
    </>
  );
}
