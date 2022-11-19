// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL and container
const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dc623eb500ac341d4a193ec56d78ed2d"
let details = [];

// Async function
async function conversion(url,array){
    const data = await fetch(url);
    if(data.ok){
        const converted = await data.json();
        array = converted
        displayResults(array.current);
    }
}

function displayResults(data){
    const temp = parseInt(data.temp);
    currentTemp.textContent = temp.toFixed(1);

    const image = data.weather[0].icon;
    const imgUrl = `https://openweathermap.org/img/w/${image}.png`
    const description = data.weather[0].description;
    weatherIcon.setAttribute("src",imgUrl);
    weatherIcon.setAttribute("alt",description);
    captionDesc.textContent = description;
}

conversion(url,details);