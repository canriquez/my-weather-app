
import { IpStack } from './ipstack';
import { FreeGeoIp } from './freegeoip';

export const OpenWeatherMap = (() => {
    const loadMySessionWeather = async (userCity, units = 'metric') => {
        const API_KEY = process.env.WEATHER_API_KEY;

        //const mySessionCity = await IpStack.getMyCity();
        const mySessionCity = await FreeGeoIp.getMyCity();


        if (mySessionCity) {
            try {
                const lat = mySessionCity.latitude;
                const long = mySessionCity.longitude;
                const cName = mySessionCity.city;
                const cCcode = mySessionCity.country_code;
                // const lang = mySessionCity.location.languages[0].code;
                const lang = 'en';

                //const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${API_KEY}`;
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${cName},${cCcode}&lang=${lang}&units=${units}&appid=${API_KEY}`;

                console.log('querying with :/n' + url);
                const response = await fetch(url,
                    { mode: 'cors' });
                const responseObject = await response.json();

                userCity.updateWeatherObject(responseObject);
                // Updates country name from IpStack response.
                // OpenWeather APi does not provide country name.
                userCity.updateCountryObject(mySessionCity.country_name);
            } catch (err) {
                console.warn('error here on openweathermap() ', err);
                throw ('Something went wrong with session weather :', err);
            }
        }
    };

    const loadMyCityWeather = async (city = 'london', units = 'metric', lang = 'en') => {
        const API_KEY = process.env.WEATHER_API_KEY;

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${API_KEY}`,
            { mode: 'cors' });

        const responseObject = await response.json();

        return responseObject;
    };
    return {
        loadMySessionWeather,
        loadMyCityWeather,
    };
})();

export default OpenWeatherMap;