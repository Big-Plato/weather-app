import { fetchData } from "./modules/fetchData.js"
import { getData, createWeatherInfo, contentSection } from "./modules/controller.js"

const search = document.querySelector("#search-text");
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", () => {
    contentSection.innerHTML = "";
    fetchData(search.value).then(function (result) {
    console.log(result)
    const weatherInfo = getData(result);
    const nextDays = result.days;
    console.log(nextDays[1])
    createWeatherInfo(weatherInfo);
    for (let i = 1; i <= 5; i++) {
        console.log(result.days[i])
        const info = getData(result.days[i]);
        console.log(info)
        createWeatherInfo(info);
    }
    
    });
})


