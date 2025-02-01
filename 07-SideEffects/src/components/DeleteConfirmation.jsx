import { useEffect } from "react";

import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    // Cleanup function
    // Runs before subsequent effects and on unmount
    // We don't enter an infinite loop because in modal we have a condition and don't render children if open is false
    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* This allows just progerss bar to reexecute very 10ms */}
      <ProgressBar />
    </div>
  );
}
