import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { myCity } from './components/mycity';

const userCity = myCity();
userCity.initWeatherObject();

async function loadUnsplashImg(text = 'sunny clouds') {
    const API_KEY = process.env.UNS_API;
    console.log(API_KEY);
    const url = `https://api.unsplash.com/search/photos?query=${text}&per_page=20&client_id=${API_KEY}`;
    console.log(`fetching from unesplash with :\n${url}`);
    const divTag = document.querySelector('.image');

    try {
        const unsplashResponse = await fetch(url);
        const unsplashObject = await unsplashResponse.json();
        const rndImageIndex = Math.floor(Math.random() * Math.floor(20));
        console.log(`Unsplash Image indes is :\n${rndImageIndex}`);
        if (unsplashObject.results[rndImageIndex].id !== '') {
            const imageTag = document.createElement('img');
            imageTag.src = unsplashObject.results[rndImageIndex].urls.small;
            divTag.append(imageTag);
        }
    } catch (err) {
        console.warn('Something went wrong with Unsplash imaginary :', err);
    }
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
        const myIp = responseText.match(ipRegexp)[0].replace(/\n|\r/g, '');
        const myCc = responseText.match(ccRegex)[0].replace(/\n|\r/g, '');
        if (myIp && myCc) {
            console.log([myIp.split('ip=').join(''), myCc.split('loc=').join('')]);

            return [myIp.split('ip=').join(''), myCc.split('loc=').join('')];
        }
        console.log(myIp);
        return [];
    } catch (err) {
        console.warn('Something went wrong with cloudflare :', err);
        return err;
    }
}

async function getMyCity() {
    const API_KEY = process.env.IPSTACK_API;
    console.log('retrieving my city info...');
    console.log('trying to catch my ip - calling getMyIP()');
    const myIp = await getMyIP();
    if (myIp !== []) {
        try {
            console.log(`from getMyCity(). This is my ip :${myIp[0]}`);
            console.log('attempting fetch for my city...');
            // console.log('attempting with url :' + `http://api.ipstack.com/${myIp}?access_key=${API_KEY}`);
            const response = await fetch(`http://api.ipstack.com/${myIp[0]}?access_key=${API_KEY}`,
                { mode: 'cors' });
            const responseObject = await response.json();

            console.log('my City IP response below');
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
            return err;
        }
    } else {
        return false;
    }
}

async function loadMySessionWeather(userCity, units = 'metric') {
    console.log('now getting the session weather');
    const API_KEY = process.env.WEATHER_API_KEY;
    console.log('Attempting get my session lat and long...');

    const wObj = userCity.getWeatherObject();
    const mySessionCity = await getMyCity();

    if (mySessionCity) {
        try {
            const lat = mySessionCity.latitude;
            const long = mySessionCity.longitude;
            const lang = mySessionCity.location.languages[0].code;

            console.log(`found my lat ${lat} and long ${long} with my language ${lang}`);
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${API_KEY}`;

            console.log(`...attepmting openweathermap.org with \n${url}`);
            const response = await fetch(url,
                { mode: 'cors' });
            console.log('session weather response below');
            const responseObject = await response.json();

            console.log('response below');
            console.log(responseObject);
            userCity.updateWeatherObject(responseObject);
        } catch (err) {
            console.warn('Something went wrong with session weather :', err);
        }
    }
}

async function loadMyCityWeather(city = 'london', units = 'metric', lang = 'en') {
    console.log(`now getting the weather info for: ${city}`);
    const API_KEY = process.env.WEATHER_API_KEY;
    const myInfo = document.createElement('article');
    const myCityName = document.createElement('h2');
    const myTemp = document.createElement('p');
    const myHum = document.createElement('p');

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${API_KEY}`,
        { mode: 'cors' });

    const responseObject = await response.json();

    console.log('response below');
    console.log(responseObject);
}


function getMyWeather() {
    function processMyInput(e) {
        console.log('Reading the input...');
        e.preventDefault();
        const myInputText = document.getElementById('myCity');
        console.log(`reading ${myInputText.value}`);
        if (myInputText.value !== '') {
            console.log('now calling the API method');
            loadMyCityWeather(myInputText.value).catch(() => {
                console.log('Weather Info not found');
            });
            console.log('now clining the input tag...');
            myInputText.value = '';
        }
    }
    const button = document.getElementById('cityButton');
    button.addEventListener('click', processMyInput, false);
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

function renderWindBox(data, ready) {
    let htmlTag = '<div class="data-card row-flex bs-xl lg-br ">';
    htmlTag += '<div class="card-title f-fil col-flex">Wind</div>';
    htmlTag += '<div class="speed col-flex">';
    htmlTag += `<p class="f-fil">${ready ? data.wind.speed.toFixed(1) : data.wind.speed}</p>`;
    htmlTag += '</div>';
    htmlTag += '<div class="win-dir col-flex">';
    htmlTag += '<p class="f-fil">km/h</p>';
    htmlTag += '<div id="wind-arrow" class="wind-arrow"></div>';
    htmlTag += '</div></div>';
    return htmlTag;
}

function renderHumiBox(data) {
    let htmlTag = '<div class="data-card row-flex bs-xl hum lg-br ">';
    htmlTag += '<div class="card-title f-fil col-flex">Humidity</div>';
    htmlTag += '<div class="drop"></div>';
    htmlTag += '<div class="humidity col-flex">';
    htmlTag += `<p class="f-fil">${data.main.humidity}</p></div>`;
    htmlTag += '<div class="percent col-flex"><p class="f-fil">%</p></div></div>';
    return htmlTag;
}

function renderCityBox(data) {
    let htmlTag = '<div class="city-card hum lg-br ">';
    htmlTag += '<div id="inputCity" class="city-name f-fil">';
    htmlTag += `<p class="f-fil-m">${data.name}</p></div>`;
    htmlTag += '<div class="state-name">';
    htmlTag += ' <p class="f-fil-m">nearby state</p></div>';
    htmlTag += '<div class="country-flag">';
    htmlTag += `<img src="https://www.countryflags.io/${data.sys.country}/flat/64.png"></img>`;
    htmlTag += '</div></div>';
    return htmlTag;
}

function renderRotateWindArrow(data) {
    const arrowTag = document.getElementById('wind-arrow');
    arrowTag.style.transform = `rotate(${data.wind.deg - 90}deg)`;
}

function transWeatherDescription(id) {
    console.log(`hey- we are in the toDeg Switch id: ${id}`);
    switch (true) {
        case (id >= 800 && id <= 804):
            return ((-8.249289925 * id * id) + (13208.61119 * id) - 5287208.395);
        case (id >= 701 && id <= 781):
            return ((-1.57282646E-3 * id * id) + (1.82322848 * id) - 465.3239501);
        case (id >= 200 && id <= 232):
            return ((2.079436717E-2 * id * id) + (-10.08168264 * id) + 1121.535281);
        case (id >= 300 && id <= 321):
            return ((-5.028726802E-2 * id * id) + (30.48646455 * id) - 4632.223787);
        case (id >= 500 && id <= 531):
            return ((1.112129237E-2 * id * id) + (-12.52634698 * id) + 3454.698266);
        case (id >= 600 && id <= 622):
            return ((-5.678032989E-2 * id * id) + (68.48273427 * id) - 20770.321);
        default:
            return 0;
    }
}

function renderRotateBarArrow(data) {
    console.log('HERE HERE: attempt bar arrow rotation...');
    console.log(`data.weather.id :${data.weather.id}`);
    const toDeg = transWeatherDescription(data.weather.id);
    console.log(`toDeg :${toDeg}`);
    const arrowTag = document.getElementById('bar-arrow');
    arrowTag.style.transform = `translateX(-50%) translateY(-50%) rotate(${toDeg}deg)`;
}


function buildWinHumDash(userCity) {
    const data = userCity.getWeatherObject();
    const ready = userCity.getDataReady();
    addTagToContainerId('main-dash', 'div', 'wind-hum-dash', 'data-box row-flex');
    let dataBox = renderWindBox(data, ready);
    dataBox += renderHumiBox(data);
    document.getElementById('wind-hum-dash').innerHTML = dataBox;
    addTagToContainerId('main-dash', 'div', 'city-dash', 'data-box row-flex');
    const cityBox = renderCityBox(data);
    document.getElementById('city-dash').innerHTML = cityBox;
    renderRotateWindArrow(data);
}


function renderTempDash(data, ready) {
    let htmlTag = '<div id="temp" class="f-fil row-flex">';
    htmlTag += `<span>${ready ? data.main.temp.toFixed(1) : data.main.temp}</span>`;
    htmlTag += '<span>o</span>';
    htmlTag += '<span>C</span></div>';
    htmlTag += '<div id="back-scale">';
    htmlTag += '<div id="sunny" class="wi"></div>';
    htmlTag += '<div id="part-cloud" class="wi"></div>';
    htmlTag += '<div id="cloudy" class="wi"></div>';
    htmlTag += '<div id="showers" class="wi"></div>';
    htmlTag += '<div id="snowy" class="wi"></div>';
    htmlTag += '<div id="stormy" class="wi"></div></div>';
    htmlTag += '<div id="bar-arrow"></div>';
    htmlTag += `<div id="pressure" class="f-fil">${data.main.pressure}hPa</div>`;
    htmlTag += '<div id="unitButton" class="f-fil units c-units"></div>';
    return htmlTag;
}

function buildWeatherLab(userCity) {
    const data = userCity.getWeatherObject();
    const ready = userCity.getDataReady();
    addTagToContainerId('main-dash', 'div', 'weather-lab', 'lab');
    const tempDash = renderTempDash(data, ready);

    document.getElementById('weather-lab').innerHTML = tempDash;

    renderRotateBarArrow(data);
}

async function initSessionWeather(userCity) {
    try {
        await loadMySessionWeather(userCity);
        // userCity.initWeatherObject();
        const currentObject = userCity.getWeatherObject();
        console.log(`current city data ready :${userCity.getDataReady()}`);
        console.log(`current object :${currentObject.weather.description}`);
        buildWeatherLab(userCity);
        buildWinHumDash(userCity);
        addCityListeners(userCity);
    } catch (err) {
        console.warn('Something went wrong with initSessionWeather :', err);
    }
}


function addCityListeners(userCity) {
    let currentCityName = userCity.getWeatherObject().name;
    const cityTag = document.getElementById('inputCity');


    const inputCity = function inputCity(e) {
        console.log("are we editing? :" + userCity.getEditingCity())
        if (userCity.getEditingCity()) { return; };
        userCity.setEditingCity();
        cityTag.classList.add('row-flex');
        cityTag.classList.add('input-city-show');
        console.log("setting editing city to :" + userCity.getEditingCity());
        console.log("getting the click and rendering the input");
        this.removeEventListener(event, inputCity, true);
        this.innerHTML = `<input type="text" id="name" name="name" 
        value="${currentCityName}"
        class="input-new-city f-fil" 
        required minlength="4" maxlength="20" size="10">
        <div id="enter-text"></div>`;
    }

    cityTag.addEventListener('click', inputCity, false);
}


document.addEventListener('DOMContentLoaded', () => {
    console.log(`we are ready ...${process.env.APP_TITLE}`);
    // getMyWeather();
    // getMyCity();
    // loadMySessionWeather(userCity);
    // loadUnsplashImg('cielo claro');
    initSessionWeather(userCity);
});
