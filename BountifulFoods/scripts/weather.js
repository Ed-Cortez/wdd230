
const currentTemp = document.querySelector("#temp");
const currentHumidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function api1Fetch() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-12.046331484873207&lon=-77.04277564288267&units=metric&appid=dc623eb500ac341d4a193ec56d78ed2d");
        if (response.ok) {
            const data = await response.json();

            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function capital(str) {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}

function displayForecast(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capital(desc);
}

api1Fetch();

//forecast starts here

const forecast = document.querySelector(".forecast");
const dayShown = document.querySelector("#day");
const tempShown = document.querySelector("#tempShown");
const forecast2 = document.querySelector(".forecast2")
const dayShown2 = document.querySelector("#day2");
const tempShown2 = document.querySelector("#tempShown2");
const forecast3 = document.querySelector(".forecast3")
const dayShown3 = document.querySelector("#day3");
const tempShown3 = document.querySelector("#tempShown3");


async function apiFetch() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=364ee35cfabcb4fec9d4af380e8686be&units=imperial");
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

