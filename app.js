import { fetchData } from "./modules/fetchData.js"
import { getData } from "./modules/Controller.js"

const search = document.querySelector("#search-text");
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", () => {
    fetchData(search.value).then(function (result) {
    const weatherInfo = getData(result);
    console.log(weatherInfo);
    })
})
