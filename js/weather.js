const API_KEY = "a7d39c1b571f07697923b30364306c5c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃`;
        city.innerText = data.name;
    });
}
function onGeoError(){
alert("Can't found you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);