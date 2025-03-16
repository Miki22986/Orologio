let roma = document.querySelector("#roma");
let data = roma.querySelector(".data");
let ora = roma.querySelector(".ora");
let city_rome = moment().tz("Europe/Rome");

data.innerHTML = city_rome.format("MMMM	Do YYYY");
ora.innerHTML = city_rome.format("h:mm:ss [<small>]A[</small>]");