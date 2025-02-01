import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Cleanup");
      clearInterval(interval);
    };
  });

  return <progress value={remainingTime} max={3000} />;
}
