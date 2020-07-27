
import { OpenWeatherMap } from './openweather';
import { UnsPlash } from './unsplash';
import { DisplayController } from './displaycontroller';
import restCountries from './restcountries';

export const AppLogic = (() => {
    const initSessionWeather = async function (userCity) {
        try {
            await OpenWeatherMap.loadMySessionWeather(userCity);
            // userCity.initWeatherObject();
            const currentObject = userCity.getWeatherObject();
            console.log(`current city data ready :${userCity.getDataReady()}`);
            console.log(`current object :${currentObject.weather.description}`);
            DisplayController.buildWeatherLab(userCity);
            DisplayController.buildWinHumDash(userCity);
            DisplayController.addCityListeners(userCity);
            DisplayController.addSystemToggle(userCity);
            console.log("stored City @ object :" + userCity.getWeatherObject().name);
            let imageKey = currentObject.weather.description + " weather "
            UnsPlash.loadImg(imageKey);

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
                //Handling City not found
                console.warn('Cod == 200 :' + cityObject.cod !== 200);
                console.log(userCity.getWeatherObject().name + ' ||||| ' + cityQuery);
                console.log("test target-actual: " + cityQuery.name == cityQuery.targetCity)
            } else {
                //city has been found - store new value
                userCity.updateWeatherObject(cityObject);
            }
            const currentObject = userCity.getWeatherObject();

            // Fetching the country's complete name
            const countryName = await restCountries.getCountryName(currentObject.sys.country);
            //OpenWeather APi does not provide country name.
            console.log("Storing country name: " + countryName);
            userCity.updateCountryObject(countryName);

            console.log(`current city data ready :${userCity.getDataReady()}`);
            console.log(`current object description is :${currentObject.weather.description}`);
            DisplayController.buildWeatherLab(userCity);
            DisplayController.buildWinHumDash(userCity);
            DisplayController.addCityListeners(userCity);
            DisplayController.addSystemToggle(userCity);
            userCity.clearEditingCity();
            console.log("stored City object :" + userCity.getWeatherObject().name);
            let imageKey = currentObject.weather.description + " beautiful "
            UnsPlash.loadImg(imageKey);
        } catch (err) {
            console.warn('Something went wrong with initCityQueryWeather :', err);
        }
    };
    return {
        initSessionWeather,
        initCityQueryWeather,

    };
})();

export default AppLogic;
