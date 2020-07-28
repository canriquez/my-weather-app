import { FreeGeoIp } from './freegeoip';

export const OpenWeatherMap = (() => {

    const loadMySessionWeather = async (userCity, units = 'metric') => {
        const API_KEY = process.env.WEATHER_API_KEY;

        // const mySessionCity = await IpStack.getMyCity();
        const mySessionCity = await FreeGeoIp.getMyCity();

        if (mySessionCity) {
            try {
                const cName = mySessionCity.city;
                const cCcode = mySessionCity.country_code;
                const lang = 'en';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cName},${cCcode}&lang=${lang}&units=${units}&appid=${API_KEY}`;

                const response = await fetch(url,
                    { mode: 'cors' });
                const responseObject = await response.json();

                userCity.updateWeatherObject(responseObject);
                // Updates country name from IpStack response.
                // OpenWeather APi does not provide country name.
                userCity.updateCountryObject(mySessionCity.country_name);
            } catch (err) {
                throw ('Something went wrong with session weather :', err);
            }
        }
    };

    const loadMyCityWeather = async (city = 'london', units = 'metric', lang = 'en') => {
        const API_KEY = process.env.WEATHER_API_KEY;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${API_KEY}`,
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