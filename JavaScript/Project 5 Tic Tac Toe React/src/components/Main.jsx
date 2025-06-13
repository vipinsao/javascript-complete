import react, { useState } from "react";

const Main = () => {
  const [mark, setMark] = useState(Array(9).fill(""));

  //for marking the first turn will always be for X
  const [turn, setTurn] = useState(true);

  //for handling that which is winner
  const [winner, setWinner] = useState(null);
  const checkWinner = (mark) => {
    if (
      (mark[0] && mark[0] === mark[1] && mark[1] === mark[2]) ||
      (mark[3] && mark[3] === mark[4] && mark[4] === mark[5]) ||
      (mark[6] && mark[6] === mark[7] && mark[7] === mark[8]) ||
      (mark[0] && mark[0] === mark[3] && mark[3] === mark[6]) ||
      (mark[1] && mark[1] === mark[4] && mark[4] === mark[7]) ||
      (mark[2] && mark[2] === mark[5] && mark[5] === mark[8]) ||
      (mark[0] && mark[0] === mark[4] && mark[4] === mark[8]) ||
      (mark[2] && mark[2] === mark[4] && mark[4] === mark[6])
    ) {
      setWinner(turn ? "X" : "O");
      //there is one winner
      return true;
    } else if (!mark.includes("")) {
      //this will be for equal i mean draw
      setWinner("draw");
      return true;
    }
    return false;
  };

  const handleTurn = (idx) => {
    //checking that if the mark array doesnt have
    //any space left means all cell is marked
    if (mark[idx] != "" || winner) return;

    //its very important step
    //i mean for updating the mark aaray we have to
    //create one copy array after updating we have to
    //push it into setMark so update happen
    const updateMark = [...mark];
    updateMark[idx] = turn ? "X" : "O";
    setMark(updateMark);

    //for checking the winner
    let Checked = checkWinner(updateMark);

    //agr abhi winner ka state change nahi hua hai toh
    if (!Checked) {
      //ye bhi very important step
      //agr X ki turn gayi toh
      //turn ko false isse O ki turn aagayi hai
      setTurn(!turn);
    }
  };
  const resetGame = () => {
    setMark(Array(9).fill(""));
    setTurn(true);
    setWinner(null);
  };
  return (
    <div className="h-[77vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 font-serif">
      <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4 drop-shadow-lg">
        Tic Tac Toe
      </h1>

      <div className="flex justify-center items-center gap-4 mb-6 bg-white/20 px-4 py-2 rounded-lg shadow-md backdrop-blur">
        <p className="text-white font-medium">
          Player 1: <span className="text-xl font-bold">X</span>
        </p>
        <span className="text-white">|</span>
        <p className="text-white font-medium">
          Player 2: <span className="text-xl font-bold">O</span>
        </p>
      </div>

      <div className="grid grid-cols-3 w-80 h-80 bg-white/10 p-2 rounded-xl shadow-inner">
        {mark.map((cell, idx) => (
          <div
            key={idx}
            onClick={() => handleTurn(idx)}
            className="flex justify-center items-center border border-white text-4xl font-bold cursor-pointer bg-white/30 backdrop-blur text-white hover:bg-white/40 transition-all duration-200 rounded-md select-none"
          >
            {cell}
          </div>
        ))}
      </div>

      {winner && (
        <div className="mt-6 text-2xl text-white font-bold animate-pulse">
          {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins! 🎉`}
        </div>
      )}

      {winner && (
        <button
          onClick={resetGame}
          className="mt-4 px-6 py-2 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all shadow-md"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Main;
