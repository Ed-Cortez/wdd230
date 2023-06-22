// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=-12.046331484873207&lon=-77.04277564288267&units=metric&appid=dc623eb500ac341d4a193ec56d78ed2d";


async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  
function displayResults(weatherData) {
  currentTemp.innerHTML = `The current temperature in ${weatherData.name}, Lima is <strong>${weatherData.main.temp.toFixed(1)}°C</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitalize(weatherData.weather[0].description);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc;
}

function capitalize(s) {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

apiFetch();


