import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    console.log(task);
    onAdd(task);
    setTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 ronded-sm bg-stone-200"
        onChange={handleTaskChange}
        value={task}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
