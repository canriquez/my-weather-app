import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { AppLogic } from './components/applogic';
import { myCity } from './components/mycity';

const userCity = myCity();
userCity.initWeatherObject();


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


document.addEventListener('DOMContentLoaded', () => {
  console.log(`we are ready ...${process.env.APP_TITLE}`);
  // getMyWeather();
  // getMyCity();
  // loadMySessionWeather(userCity);
  // loadUnsplashImg('cielo claro');
  AppLogic.initSessionWeather(userCity);
});
