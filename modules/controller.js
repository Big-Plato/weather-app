export const contentSection = document.querySelector("#content");

export function getData(data) {
  let address = data.datetime || data.resolvedAddress;
  console.log(address);
  let description = data.description;
  let conditions = data.currentConditions.conditions || data.conditions;
  console.log(conditions)
  let sensationTerm =  data.feelslike || data.currentConditions.feelslike;
  let temp = data.temp || data.currentConditions.temp;
  let icon = data.icon || data.currentConditions.icon;

  return { address, description, conditions, sensationTerm, temp, icon };
}

export function createWeatherInfo(obj) {
  console.log(obj)
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
  paraAddress.innerHTML = `<p><strong>${obj.address}</strong></p>
  <p><span><strong>Conditions:</strong> ${obj.conditions}</span></p>
  <strong>Description:</strong><p> ${obj.description}</
  p>
  <p><strong>Feels like:</strong> ${obj.sensationTerm}</p>`;
}

function createElement(element) {
  const name = document.createElement(element);
  return name;
}