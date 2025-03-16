setInterval(function(){
    let RomeElement = document.querySelector("#rome");
    let RomeData = RomeElement.querySelector(".data");
    let ora = RomeElement.querySelector(".ora");
    let Rome = moment().tz("Europe/Rome");

    RomeData.innerHTML= Rome.format("MMMM Do YYYY");
    ora.innerHTML = Rome.format("h:mm:ss [<small>]A[</small>]");
});

setInterval(function(){
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".data");
    let losAngelesTimeElement = losAngelesElement.querySelector(".ora");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]" );
});