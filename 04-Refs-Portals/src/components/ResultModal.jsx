import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  remainingTime,
  targetTime,
  ref,
  onReset,
}) {
  //  We have to open the dialog programatically to access the backdrop since we are using open
  // Ref is being forwarded to the dialog element
  // Before react 19 we had to use forwardRef to forward refs to child components

  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedReaminingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Makes the component more predictable and stable
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Portal element should be in index.html
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedReaminingTime} left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
