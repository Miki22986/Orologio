let roma = document.querySelector("#roma");
let data = roma.querySelector(".data");
let hour = roma.querySelector(".ora");
let city_rome = moment().tz("Europe/Rome");

data.innerHTML = city_rome.format("MMM dddd Do YY");
hour.innerHTML = city_rome.format('LTS');