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
  const days = retrieveLocalStorage();
  const city = days[0].address.split(" ");
  // console.log(days)
  fetchData(city[0].replace(",", "")).then(function (result) {
   populate(getData(result), result)
  });
});

searchBtn.addEventListener("click", () => {
  contentSection.innerHTML = "";
  fetchData(search.value).then(function (result) {
    populate(getData(result), result)
    saveToLocalStorage(weatherInfo, nextDays);
    
  });
});


function populate(fn, result) {
    const weatherInfo = fn;
    const nextDays = result.days;
    console.log(nextDays)
    createWeatherInfo(weatherInfo);
    for (let i = 1; i <= 5; i++) {
        const info = result.days[i];
        console.log("Info " + info)
        createWeatherInfo(info)
      }
      return weatherInfo, nextDays;
}