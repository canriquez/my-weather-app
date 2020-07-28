
import { OpenWeatherMap } from './openweather';
import { UnsPlash } from './unsplash';
import { DisplayController } from './displaycontroller';
import { RestCountries } from './restcountries';

export const AppLogic = (() => {
    const addCityListeners = (userCity) => {
        const currentCityName = userCity.getWeatherObject().name;
        const cityTag = document.getElementById('inputCity');


        const inputCity = function inputCity(e) {
            if (userCity.getEditingCity()) { return; }
            userCity.setEditingCity();
            cityTag.classList.add('row-flex');
            cityTag.classList.add('input-city-show');
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
            DisplayController.buildWeatherLab(userCity);
            DisplayController.buildWinHumDash(userCity);
            addCityListeners(userCity);
            DisplayController.addSystemToggle(userCity);
            const imageKey = `${currentObject.weather.description} weather `;
            const creditsInfo = await UnsPlash.loadImg(imageKey);

            DisplayController.buildCredits(creditsInfo);
        } catch (err) {
            throw ('Something went wrong with initSessionWeather :', err);
        }
    };

    const initCityQueryWeather = async (userCity) => {
        const cityQuery = userCity.getWeatherObject().targetCity;
        try {
            const cityObject = await OpenWeatherMap.loadMyCityWeather(cityQuery);
            if (cityObject.cod === 200) {
                // city has been found - store new value
                userCity.updateWeatherObject(cityObject);
            }
            const currentObject = userCity.getWeatherObject();

            // Fetching the country's complete name
            const countryName = await RestCountries.getCountryName(currentObject.sys.country);
            // OpenWeather APi does not provide country name.
            userCity.updateCountryObject(countryName);

            DisplayController.buildWeatherLab(userCity);
            DisplayController.buildWinHumDash(userCity);
            addCityListeners(userCity);
            DisplayController.addSystemToggle(userCity);
            userCity.clearEditingCity();
            const imageKey = `${currentObject.weather.description} weather `;
            const creditsInfo = await UnsPlash.loadImg(imageKey);
            DisplayController.buildCredits(creditsInfo);
        } catch (err) {
            throw ('Something went wrong with initCityQueryWeather :', err);
        }
    };

    /* listeners */

    const updateCityListener = (userCity) => {
        const okText = document.getElementById('ok-text');

        const storeNewCity = function storeNewCity() {
            const cityInputTag = document.getElementById('newCityName');
            const cityObj = userCity.getWeatherObject();
            cityObj.targetCity = cityInputTag.value;
            initCityQueryWeather(userCity);
        };
        okText.addEventListener('click', storeNewCity, false);
    };

    const cancellCityListener = (userCity) => {
        const cancellTag = document.getElementById('cancel-text');

        const cancellNewCity = function cancellNewCity(e) {
            e.stopPropagation();

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
