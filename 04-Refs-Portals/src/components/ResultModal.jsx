export default function ResultModal({ result, targetTime, ref }) {
  //  We have to open the dialog programatically to access the backdrop since we are using open
  // Ref is being forwarded to the dialog element
  // Before react 19 we had to use forwardRef to forward refs to child components
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
