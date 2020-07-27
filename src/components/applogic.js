
import { OpenWeatherMap } from './openweather';
import { UnsPlash } from './unsplash';
import { DisplayController } from './displaycontroller';

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
            console.log("stored City @ object :" + userCity.getWeatherObject().name);
            //UnsPlash.loadImg(userCity.getWeatherObject().weather.description);
        } catch (err) {
            console.warn('Something went wrong with initSessionWeather :', err);
        }
    };

    const initCityQueryWeather = async (userCity) => {
        const cityQuery = userCity.getWeatherObject().name;
        console.log(`initiating city weather query with city: ${cityQuery}`);
        try {
            const cityObject = await OpenWeatherMap.loadMyCityWeather(cityQuery);
            userCity.updateWeatherObject(cityObject);
            // userCity.initWeatherObject();
            const currentObject = userCity.getWeatherObject();
            console.log(`current city data ready :${userCity.getDataReady()}`);
            console.log(`current object :${currentObject.weather.description}`);
            DisplayController.buildWeatherLab(userCity);
            DisplayController.buildWinHumDash(userCity);
            DisplayController.addCityListeners(userCity);
            userCity.clearEditingCity();
            console.log("stored City object :" + userCity.getWeatherObject().name);
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
