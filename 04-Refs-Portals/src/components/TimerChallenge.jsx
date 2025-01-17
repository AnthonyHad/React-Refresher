import { useState, useRef } from "react";

import ResultModal from "./ResultModal";

// Having th timer variable outside the function component will not solve the stopping problem
// This is because React rerenders the component and the timer variable is reset to undefined
//   let timer;

export default function TimerChallenge({ title, targetTime }) {
  // With ref every component instance has its own timer and it will not be reset on re-render
  const timer = useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setTimerRemaining] = useState(targetTime * 1000);

  //  let timer;

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Could create an infinite loop but because we have the if statement it will not
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimerRemaining(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
