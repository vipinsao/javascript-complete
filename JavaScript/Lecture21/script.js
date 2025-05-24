const show = document.querySelector("h1");
let time = 0;
function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  show.innerText = time;
}

setInterval(showTime, 1000);
