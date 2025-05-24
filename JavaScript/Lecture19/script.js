const button = document.getElementById("search");
const input = document.getElementById("city");
const result = document.getElementById("result");
let value = "";

if (localStorage.getItem("city")) {
  value = localStorage.getItem("city");
  getData(value);
}

input.addEventListener("input", (e) => {
  if (e.target.value) {
    value = e.target.value;
  }
});
button.addEventListener("click", () => {
  if (!value) {
    alert("Please enter a city name");
    return;
  }
  getData(value);
  localStorage.setItem("city", value);
});

async function getData(value) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5cb9c4806a0b446a862133104252405&q=${value}&aqi=yes`
  );

  const response = await data.json();
  console.log(response);
  let name = response.location.name;
  let temp = response.current.temp_c;
  let time = response.location.localtime;
  result.innerHTML = `
  <h3>City:- ${name}</h3>
  <h3>Current Temperature:- ${temp}</h3>
    <h3>Local Time:- ${time.slice(-6)}</h3>`;
}
