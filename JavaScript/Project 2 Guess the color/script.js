const colorCodeContainer = document.getElementById("color-code");
const optionsContainer = document.getElementById("options-container");

let randomColor = null;
function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min) + 1);
}

function generateRandomColorRGB() {
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validateResult(event) {
  const selectedColor = event.target.style.backgroundColor;
  if (selectedColor === randomColor) {
    alert("Correct! You guessed the color!");
    window.location.reload();
    return;
  } else {
    alert("Wrong! Try again.");
    window.location.reload();
    return;
  }
}

function startGame() {
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumberBetween(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionsContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());
