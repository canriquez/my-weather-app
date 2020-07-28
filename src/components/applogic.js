
import { OpenWeatherMap } from './openweather';
import { UnsPlash } from './unsplash';
import { DisplayController } from './displaycontroller';
import { RestCountries } from './restcountries';

export const AppLogic = (() => {
  const addCityListeners = (userCity) => {
    const currentCityName = userCity.getWeatherObject().name;
    const cityTag = document.getElementById('inputCity');


    const inputCity = function inputCity(e) {
      console.log(`are we editing? :${userCity.getEditingCity()}`);
      if (userCity.getEditingCity()) { return; }
      userCity.setEditingCity();
      cityTag.classList.add('row-flex');
      cityTag.classList.add('input-city-show');
      console.log(`setting editing city to :${userCity.getEditingCity()}`);
      console.log('getting the click and rendering the input');
      this.removeEventListener(e, inputCity, true);
      this.innerHTML = `<input type="text" id="newCityName" name="newCityName" 
                    value="${currentCityName}"
                    class="input-new-city f-fil" 
                    required minlength="4" maxlength="20" size="10">
                    <div id="ok-text" class="edit-action-btn"></div>
                    <div id="cancel-text" class="edit-action-btn"></div>`;

      // eslint-disable-next-line no-use-before-define
      updateCityListener(userCity);
      // eslint-disable-next-line no-use-before-define
      cancellCityListener(userCity);
    };


    cityTag.addEventListener('click', inputCity, false);
  };


  const initSessionWeather = async function initSessionWeather(userCity) {
    try {
      await OpenWeatherMap.loadMySessionWeather(userCity);
      // userCity.initWeatherObject();
      const currentObject = userCity.getWeatherObject();
      console.log(`current city data ready :${userCity.getDataReady()}`);
      console.log(`current object :${currentObject.weather.description}`);
      DisplayController.buildWeatherLab(userCity);
      DisplayController.buildWinHumDash(userCity);
      addCityListeners(userCity);
      DisplayController.addSystemToggle(userCity);
      console.log(`stored City @ object :${userCity.getWeatherObject().name}`);
      const imageKey = `${currentObject.weather.description} weather `;
      const creditsInfo = await UnsPlash.loadImg(imageKey);

      console.log(creditsInfo);
      DisplayController.buildCredits(creditsInfo);
    } catch (err) {
      console.warn('Something went wrong with initSessionWeather :', err);
    }
  };

  const initCityQueryWeather = async (userCity) => {
    const cityQuery = userCity.getWeatherObject().targetCity;
    console.log(`initiating city weather query with city: ${cityQuery}`);
    try {
      const cityObject = await OpenWeatherMap.loadMyCityWeather(cityQuery);
      if (cityObject.cod !== 200) {
        // Handling City not found
        console.warn(`Cod == 200 :${cityObject.cod}` !== 200);
        console.log(`${userCity.getWeatherObject().name} ||||| ${cityQuery}`);
        console.log(`test target-actual: ${cityQuery.name}` === cityQuery.targetCity);
      } else {
        // city has been found - store new value
        userCity.updateWeatherObject(cityObject);
      }
      const currentObject = userCity.getWeatherObject();

      // Fetching the country's complete name
      const countryName = await RestCountries.getCountryName(currentObject.sys.country);
      // OpenWeather APi does not provide country name.
      console.log(`Storing country name: ${countryName}`);
      userCity.updateCountryObject(countryName);

      console.log(`current city data ready :${userCity.getDataReady()}`);
      console.log(`current object description is :${currentObject.weather.description}`);

      DisplayController.buildWeatherLab(userCity);
      DisplayController.buildWinHumDash(userCity);
      addCityListeners(userCity);
      DisplayController.addSystemToggle(userCity);
      userCity.clearEditingCity();
      console.log(`stored City object :${userCity.getWeatherObject().name}`);
      const imageKey = `${currentObject.weather.description} beautiful `;
      UnsPlash.loadImg(imageKey);
    } catch (err) {
      console.warn('Something went wrong with initCityQueryWeather :', err);
    }
  };

  /* listeners */

  const updateCityListener = (userCity) => {
    const okText = document.getElementById('ok-text');

    const storeNewCity = function storeNewCity() {
      const cityInputTag = document.getElementById('newCityName');
      const cityObj = userCity.getWeatherObject();
      console.log(`-User Accepted the input- :${cityInputTag.value}`);
      cityObj.targetCity = cityInputTag.value;

      userCity.clearDataReady();
      console.log(`this is the weather OBJ after update :\n${userCity.getWeatherObject().targetCity}`);
      initCityQueryWeather(userCity);
    };
    okText.addEventListener('click', storeNewCity, false);
  };

  const cancellCityListener = (userCity) => {
    const cancellTag = document.getElementById('cancel-text');

    const cancellNewCity = function cancellNewCity(e) {
      e.stopPropagation();
      console.log('User has cancel Edit action... rendering all back: ');
      // userCity.clearDataReady();
      DisplayController.buildWeatherLab(userCity);
      DisplayController.buildWinHumDash(userCity);
      addCityListeners(userCity);
      DisplayController.addSystemToggle(userCity);
      userCity.clearEditingCity();
    };
    cancellTag.addEventListener('click', cancellNewCity, false);
  };


  return {
    initSessionWeather,
    initCityQueryWeather,

  };
})();

export default AppLogic;
