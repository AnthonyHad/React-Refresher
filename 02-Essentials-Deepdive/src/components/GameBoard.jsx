// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  // Deriving State from turns

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   // If the state is an array or object it's best to create a copy of it as if we use the below method we will update it in memory even before than react can make the update. We should create a copy of this state. Because we deal with reference values. React will not detect state diffs if we use this method
  //   setGameBoard((prev) => {
  //     const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
