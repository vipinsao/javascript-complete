const btn = document.querySelector("button");
const live = document.getElementById("loc");
function gotLocation(position) {
  console.log("Got location:", position);
  locat(position);
}

function failedToGet() {
  console.error("Failed to get location");
  alert(
    "Unable to retrieve your location. Please check your browser settings."
  );
}

btn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});

async function locat(result) {
  let lat = result.coords.latitude;
  let long = result.coords.longitude;
  let value = `${lat},${long}`;
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5cb9c4806a0b446a862133104252405&q=${value}&aqi=yes`
  );
  const response = await data.json();
  let city = response.location.name;
  let country = response.location.country;
  live.innerHTML = `<h3>Location - ${city},${country} </h3>`;
  console.log(response);
}
