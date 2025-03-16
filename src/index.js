
let data = document.querySelector("#dataRoma");
let ora = document.querySelector("#oraRoma");
let Rome = moment().tz("Europe/Rome");

 data.innerHTML= Rome.format("MMMM	Do YYYY");
 ora.innerHTML = Rome.format("h:mm:ss [<small>]A[</small>]");

