export const contentSection = document.querySelector("#content");

export function getData(data) {
  let address = data.resolvedAddress || data.datetime;
  let description = data.description;
  let conditions = data.currentConditions.conditions || data.conditions;
  let sensationTerm = data.currentConditions.feelslike || data.feelslike;
  let temp = data.currentConditions.temp || data.temp;
  let icon = data.currentConditions.icon || data.icon;

  return { address, description, conditions, sensationTerm, temp, icon };
}

export function createWeatherInfo(obj) {
  const divCard = createElement("div");
  divCard.classList.add("card");
  contentSection.appendChild(divCard);

  const divInfo = createElement("div");
  divInfo.classList.add("div-info");
  divCard.appendChild(divInfo);

  const imgWeather = createElement("img");
  imgWeather.src = "./assets/" + obj.icon + ".svg";
  divInfo.appendChild(imgWeather);
  
  const divTemp = createElement("div");
  divTemp.classList.add("div-temp")
  const paraTemp = createElement("p");
  paraTemp.innerHTML = `<strong>${obj.temp}</strong>` 

  const imgTemp = createElement("img");
  imgTemp.src = "./assets/temperature.svg"; 
  divInfo.appendChild(divTemp);
  divTemp.appendChild(paraTemp);
  divTemp.appendChild(imgTemp);
  
  const paraAddress = createElement("p");
  divCard.appendChild(paraAddress);
  paraAddress.innerHTML = `<strong>${obj.address}</strong>
  <span><strong>Conditions:</strong> ${obj.conditions}</span>
  <strong>Description:</strong> ${obj.description} \n
  <strong>Feels like:</strong> ${obj.sensationTerm}`;
}

function createElement(element) {
  const name = document.createElement(element);
  return name;
}