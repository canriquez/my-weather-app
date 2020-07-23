import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { myCity } from './components/mycity';



async function loadMyCityWeather(city = "london") {
    console.log("now getting the weather info for: " + city);
    const API_KEY = process.env.WEATHER_API_KEY;
    const myInfo = document.createElement('article');
    const myCityName = document.createElement('h2');
    const myTemp = document.createElement('p');
    const myHum = document.createElement('p');

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
        { mode: 'cors' });

    const responseObject = await response.json();

    console.log("response below");
    console.log(response);
}


function getMyWeather() {
    function processMyInput(e) {
        console.log("Reading the input...")
        e.preventDefault();
        const myInputText = document.getElementById('myCity');
        console.log("reading " + myInputText.value);
        if (myInputText.value !== '') {
            console.log("now calling the API method");
            loadMyCityWeather(myInputText.value).catch(() => {
                console.log('Weather Info not');
            });
            console.log('now clining the input tag...');
            myInputText.value = ''
        }
    }
    const button = document.getElementById('cityButton');
    button.addEventListener('click', processMyInput, false);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('we are ready ...' + process.env.APP_TITLE);
    getMyWeather();

});
