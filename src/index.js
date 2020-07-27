import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { AppLogic } from './components/applogic';
import { myCity } from './components/mycity';

const userCity = myCity();
userCity.initWeatherObject();


document.addEventListener('DOMContentLoaded', () => {
  console.log(`we are ready ...${process.env.APP_TITLE}`);

  AppLogic.initSessionWeather(userCity);
});
