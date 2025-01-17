import { useState, useRef } from "react";

export default function Player() {
  // We use ref to avoid state management for the input field
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submittedPlayerName, setSubmittedPlayerName] = useState(false);

  // function handleChange(event) {
  //   setSubmittedPlayerName(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    // setSubmittedPlayerName(true);
    setEnteredPlayerName(playerName.current.value);
    // We usully want to let  React handle DOM updates but in this case it's fine
    // We should avoid using refs to manipulate and update the DOM
    // With Refs the component function is not re-rendered
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
