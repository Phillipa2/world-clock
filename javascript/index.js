function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("H:mm:ss [<small>]A[</small>]");
}

//tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) { 
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("H:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
let cityTimezone = event.target.value;
let cityName = cityTimezone.replace("_"," ").split("/")[1];
let cityTime = moment().tz(cityTimezone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);