import { API_Key } from "./constant.js";
document.addEventListener("DOMContentLoaded", () => {
  let value;
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    value = `${latitude},${longitude}`;
    getCurrentWeather(value);
  });
  const getCurrentWeather = async (value) => {
    try {
      const currentWeather = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5e43b2d020694409b0b144614250606&q=${value}`
      );
      const response = await currentWeather.json();
      console.log(response);
    } catch (error) {
      console.log("Error unable to get current data", error);
    }
  };
  document.getElementById("getCity").addEventListener("click", () => {
    const cityName = document.getElementById("cityData").value.trim();

    if (cityName === "") {
      alert("Enter City Name");
    }

    console.log("City Name - ", cityName);
    getForecastWeather(cityName);
  });

  const getForecastWeather = async (cityName) => {
    try {
      const forecastWeather = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=5e43b2d020694409b0b144614250606&q=${cityName}&days=7&alerts=yes`
      );
      const response = await forecastWeather.json();
      console.log(response);
    } catch (error) {
      console.log("Error unable to get forecast weather", error);
    }
  };

  //   getData();
});
