let currentPlayer = "X";
let array = Array(9).fill(null);

function check() {
  const winningCombinations = [
    [0, 1, 2], //row
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], //column
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], //diagonal
    [2, 4, 6],
  ];
  for (let win of winningCombinations) {
    //array[win[0]]!== null is important check because
    //at start every element of array is null
    //if we don't check it then it will show player X wins at start
    if (
      array[win[0]] != null &&
      array[win[0]] == array[win[1]] &&
      array[win[1]] == array[win[2]]
    ) {
      alert(`Player ${array[win[0]]} wins!`);
      // Reset the game
      array.fill(null);
      window.location.reload();
      return;
    } else if (!array.includes(null)) {
      alert("It's a draw!");
      array.fill(null);
      window.location.reload();
      return;
    }
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (array[id] !== null) {
    alert("This cell is already taken!");
    return;
  }
  array[id] = currentPlayer;
  el.innerText = currentPlayer;
  check();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
