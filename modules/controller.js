const contentSection = document.querySelector("#content");

export function getData(data) {
  const address = data.resolvedAddress;
  const description = data.description;
  const conditions = data.currentConditions.conditions;
  const sensationTerm = data.currentConditions.feelslike;
  const temp = data.currentConditions.temp;
  const icon = data.currentConditions.icon;

  return { address, description, conditions, sensationTerm, temp, icon };
}

export function createWeatherInfo(obj) {
  const divCard = createElement("div");
  contentSection.appendChild(divCard);

  const divInfo = createElement("div");
  divCard.appendChild(divInfo);

  const imgWeather = createElement("img");
  imgWeather.src = "./assets/" + obj.icon + ".svg";
  divInfo.appendChild(imgWeather);
  
  const divTemp = createElement("div");
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
  <strong>Conditions:</strong> ${obj.conditions}
  <strong>Description:</strong> ${obj.description}
  <strong>Feels like:</strong> ${obj.sensationTerm}`;
}

function createElement(element) {
  const name = document.createElement(element);
  return name;
}
