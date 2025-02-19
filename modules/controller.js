export const contentSection = document.querySelector("#content");

export function getData(data) {
  let address = data.datetime || data.resolvedAddress;
  let description = data.description;
  let conditions = data.currentConditions.conditions || data.conditions;
  let sensationTerm =  data.feelslike || data.currentConditions.feelslike;
  let temp = data.temp || data.currentConditions.temp;
  let icon = data.icon || data.currentConditions.icon;

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
  const address = obj.address || formatDate(obj.datetime);
  const feelslike = obj.feelslike || obj.sensationTerm;
  paraAddress.innerHTML = `<p><strong>${address}</strong></p>
  <p><span><strong>Conditions:</strong> ${obj.conditions}</span></p>
  <p><strong>Description:</strong> ${obj.description}</
  p>
  <p><strong>Feels like:</strong> ${feelslike}</p>`;
}

function createElement(element) {
  const name = document.createElement(element);
  return name;
}

const formatDate = (date) => {
  const arr = date.split("-");
  return `${arr[2]}/${arr[1]}/${arr[0]}`;
}