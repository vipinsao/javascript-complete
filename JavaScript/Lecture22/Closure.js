const text = document.getElementById("txt");

function closerUse(size) {
  function textSize() {
    text.style.fontSize = size + "px";
  }
  return textSize;
}

const txtSize = closerUse(80);
txtSize();
