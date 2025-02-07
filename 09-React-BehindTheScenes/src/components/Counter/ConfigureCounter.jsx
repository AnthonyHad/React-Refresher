import { useState } from "react";
import { log } from "../../log.js";

export default function ConfigureCounter({ onSetCount }) {
  // The code here was living the App component. We moved it to avoid unnecessary re-renders of the Counter component. The keystroke change state will live here.
  log("<ConfigureCounter />", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSetCount(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
