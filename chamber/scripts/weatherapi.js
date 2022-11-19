// Select HTML elements in the document.
const temperature = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('.wind-speed');
const windChill = document.querySelector('.wind-chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.0463&lon=-77.042&units=metric&appid=dc623eb500ac341d4a193ec56d78ed2d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherdata) {
    temperature.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`; 
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`; 
    const desc = weatherdata.weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc); 
    weatherIcon.setAttribute('alt', desc); 
    captionDesc.textContent = desc;
    windSpeed.innerHTML = `${weatherdata.wind.speed}`;

    const words = desc.split(" "); 
    for (let i = 0; i < words.length; i++) { 
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1); 
    }
    const newWords = words.join(" "); 
    console.log(words) 
    captionDesc.textContent = newWords; 

    let windChill = "";
    if (temperature <= 50 && windSpeed > 3.0) {
        windChill = Math.round(35.74 + (0.6215 * temperature ) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16) )).toString() + "°F";
    } else {
        windChill = "N/A"
    }
    document.querySelector('.wind-chill').innerHTML = windChill
} 