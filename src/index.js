function updateRome(){
    let RomeElement = document.querySelector("#rome");
    let RomeData = RomeElement.querySelector(".data");
    let ora = RomeElement.querySelector(".ora");
    let Rome = moment().tz("Europe/Rome");

    RomeData.innerHTML= Rome.format("MMMM Do YYYY");
    ora.innerHTML = Rome.format("h:mm:ss [<small>]A[</small>]");
}
updateRome();
setInterval(updateRome, 1000);

function updateLosAngeles(){
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".data");
    let losAngelesTimeElement = losAngelesElement.querySelector(".ora");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]" );
}
setInterval(updateLosAngeles, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cities = document.querySelector("main");
  cities.innerHTML = `
  <div id="one_city">
   <div class="display">
      <h2 class="NameCity">${cityName}</h2>
      <div class="data">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="ora">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let choseCity = document.querySelector("#cities");
choseCity.addEventListener("change", updateCity);
setInterval(updateCity, 1000);