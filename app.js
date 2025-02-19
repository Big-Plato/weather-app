import { fetchData } from "./modules/fetchData.js";
import {
  getData,
  createWeatherInfo,
  contentSection,
} from "./modules/controller.js";
import {
  retrieveLocalStorage,
  saveToLocalStorage,
} from "./modules/localStorage.js";

const search = document.querySelector("#search-text");
const searchBtn = document.querySelector("#search-button");

// Everytime the user does a search, the city is saved
// in localStorage and when the page opens again the place
// that was saved is retrieved
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.length > 0) {
    const loaderCircle = loadingCircle();
    loaderCircle.classList.add("loaderCircle");
    const days = retrieveLocalStorage();
    const city = days[0].address.split(",");
    console.log(city)
    fetchData(city[0].replace(",", "")).then(function (result) {
      populate(getData(result), result);
      loaderCircle.parentNode.removeChild(loaderCircle);
    });
  }
});

searchBtn.addEventListener("click", () => {
  const loaderCircle = loadingCircle();
  loaderCircle.classList.add("loaderCircle");
  contentSection.innerHTML = "";
  fetchData(search.value).then(function (result) {
    const current = getData(result);
    const nextDays = result.days;
    populate(getData(result), result);
    saveToLocalStorage(current, nextDays);
  });
});

function populate(fn, result) {
  const weatherInfo = fn;
  const nextDays = result.days;
  createWeatherInfo(weatherInfo);
  for (let i = 1; i <= 5; i++) {
    const info = result.days[i];
    createWeatherInfo(info);
  }
  return weatherInfo, nextDays;
}

const loadingCircle = () => {
  const loaderCircle = document.createElement("div");
  loaderCircle.classList.add("loader-circle");
  contentSection.appendChild(loaderCircle);

  return loaderCircle;
};
