import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  // We can also use the React dev tools profiler when interacting with components to assess performance and see how components are rendered or executed.
  // We can also add the "why component rendered" feature to the React dev tools profiler settings to see why a component is rendered.

  // const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  // function handleChange(event) {
  //   setEnteredNumber(+event.target.value);
  // }

  // function handleSetClick() {
  //   setChosenCount(enteredNumber);
  //   setEnteredNumber(0);
  // }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
