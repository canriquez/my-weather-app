
import './style.css';

import { AppLogic } from './components/applogic';
import { myCity } from './components/mycity';

const userCity = myCity();
userCity.initWeatherObject();


document.addEventListener('DOMContentLoaded', () => {
  AppLogic.initSessionEmpty(userCity);
  AppLogic.initSessionWeather(userCity);
});
