import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { myCity } from './components/mycity';

let userCity = myCity();

async function loadUnsplashImg(text = 'sunny clouds') {
    const API_KEY = process.env.UNS_API;
    console.log(API_KEY);
    const url = `https://api.unsplash.com/search/photos?query=${text}&per_page=20&client_id=${API_KEY}`;
    console.log('fetching from unesplash with :\n' + url);
    const divTag = document.querySelector('.image');

    try {
        const unsplashResponse = await fetch(url);
        const unsplashObject = await unsplashResponse.json();
        let rndImageIndex = Math.floor(Math.random() * Math.floor(20));
        console.log('Unsplash Image indes is :\n' + rndImageIndex)
        if (unsplashObject.results[rndImageIndex].id !== "") {
            let imageTag = document.createElement('img');
            imageTag.src = unsplashObject.results[rndImageIndex].urls.small;
            divTag.append(imageTag);
        }

    } catch (err) {
        console.warn('Something went wrong with Unsplash imaginary :', err);
    };

}




async function getMyIP() {
    const ipRegexp = /(?=ip=)ip=(\d+[.]\d+[.]\d+[.]\d+)/g;
    const ccRegex = /(?=loc)loc=(\w+)\n/g;
    console.log('getting into my IP fetch...');
    try {
        const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',
            { mode: 'cors' });
        const responseText = await response.text();
        console.log(responseText);
        let myIp = responseText.match(ipRegexp)[0].replace(/\n|\r/g, "");;
        let myCc = responseText.match(ccRegex)[0].replace(/\n|\r/g, "");;
        if (myIp && myCc) {
            console.log([myIp.split('ip=').join(''), myCc.split('loc=').join('')]);

            return [myIp.split('ip=').join(''), myCc.split('loc=').join('')];
        } else {
            return [];
        };// let myIp = ipText.split('\n')[2];

        console.log(myIp);
    } catch (err) {
        console.warn('Something went wrong with cloudflare :', err);
    }
    return;
}

async function getMyCity() {
    const API_KEY = process.env.IPSTACK_API;
    console.log('retrieving my city info...');
    console.log('trying to catch my ip - calling getMyIP()');
    const myIp = await getMyIP();
    if (myIp !== []) {
        try {
            console.log('from getMyCity(). This is my ip :' + myIp[0]);
            console.log('attempting fetch for my city...');
            console.log('attempting with url :' + `http://api.ipstack.com/${myIp}?access_key=${process.env.IPSTACK_API}`)
            const response = await fetch(`http://api.ipstack.com/${myIp[0]}?access_key=${process.env.IPSTACK_API}`,
                { mode: 'cors' });
            const responseObject = await response.json();

            console.log("my City IP response below");
            console.log(responseObject);
            console.log(responseObject.ip);
            console.log(responseObject.country_name);
            console.log(responseObject.latitude);
            console.log(responseObject.longitude);
            console.log(responseObject.location.country_flag_emoji);
            console.log(responseObject.location.languages[0].code);
            console.log(responseObject.location.languages[0].name);
            return responseObject;

        } catch (err) {
            console.warn('Something went wrong with ipstack :', err);
        };
    } else {
        return false;
    }
}

async function loadMySessionWeather(userCity, units = "metric") {
    console.log("now getting the session weather");
    const API_KEY = process.env.WEATHER_API_KEY;
    console.log("Attempting get my session lat and long...");
    const mySessionCity = await getMyCity();

    if (mySessionCity) {
        try {

            const lat = mySessionCity.latitude;
            const long = mySessionCity.longitude;
            const lang = mySessionCity.location.languages[0].code;

            console.log(`found my lat ${lat} and long ${long} with my language ${lang}`);
            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${API_KEY}`;

            console.log('...attepmting openweathermap.org with \n' + url);
            const response = await fetch(url,
                { mode: 'cors' });
            console.log('session weather response below');
            const responseObject = await response.json();

            console.log("response below");
            console.log(responseObject);
            userCity.updateWeatherObject(responseObject);

        } catch (err) {
            console.warn('Something went wrong with session weather :', err);
        }
    }

}

async function loadMyCityWeather(city = "london", units = "metric", lang = "en") {
    console.log("now getting the weather info for: " + city);
    const API_KEY = process.env.WEATHER_API_KEY;
    const myInfo = document.createElement('article');
    const myCityName = document.createElement('h2');
    const myTemp = document.createElement('p');
    const myHum = document.createElement('p');

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${API_KEY}`,
        { mode: 'cors' });

    const responseObject = await response.json();

    console.log("response below");
    console.log(responseObject);
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
                console.log('Weather Info not found');
            });
            console.log('now clining the input tag...');
            myInputText.value = ''
        }
    }
    const button = document.getElementById('cityButton');
    button.addEventListener('click', processMyInput, false);
}

async function initSessionWeather(userCity) {

    try {
        await loadMySessionWeather(userCity);
        let currentObject = userCity.getWeatherObject();
        console.log('current city data ready :' + userCity.getDataReady());
        console.log('current object :' + currentObject.weather[0].description);
    } catch (err) {
        console.warn('Something went wrong with checkReady :', err);
    }
}

function addTagToContainerId(containerId, tagType, tagId = '', classes = '') {
    const contentTag = document.getElementById(containerId);
    const newTag = document.createElement(tagType);
    if (tagId !== '') {
        newTag.setAttribute('id', tagId);
    }

    if (classes !== '') {
        newTag.setAttribute('class', classes);
    }
    contentTag.appendChild(newTag);
}

function renderWindBox(userCity) {
    let htmlTag = `<div class="data-card row-flex bs-xl lg-br ">`;
    htmlTag = `<div class="card-title col-flex">Wind</div>`;
    htmlTag = `<div class="speed col-flex">`;
    htmlTag = `<p>65</p>`;
    htmlTag = `</div>`;
    htmlTag = `<div class="win-dir col-flex">`;
    htmlTag = `<p>km/h</p>`;
    htmlTag = `<div class="wind-arrow"></div>`;
    htmlTag = `</div></div>`
    return htmlTag;
}

function renderHumiBox(userCity) {
    let htmlTag = `<div class="data-card row-flex bs-xl hum lg-br ">`;
    htmlTag = `<div class="card-title col-flex">Humidity</div>`;
    htmlTag = `<div class="drop"></div>`;
    htmlTag = `<div class="humidity col-flex">`;
    htmlTag = `<p>40</p></div>`;
    htmlTag = `<div class="percent col-flex"><p>%</p></div></div>`;
    return htmlTag;
}

function buildWinHumDash(userCity) {
    addTagToContainerId('main-dash', 'div', 'wind-hum-dash', 'data-box row-flex');
    let data_box = renderDataBox(userCity);
    data_box = renderDataBox(userCity)
    document.getElementById('wind-hum-dash').innerHTML = data_box;
    addImagesMenuContainer();
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('we are ready ...' + process.env.APP_TITLE);
    //getMyWeather();
    //getMyCity();
    //loadMySessionWeather(userCity);
    //loadUnsplashImg('snow');
    //initSessionWeather(userCity);
});
