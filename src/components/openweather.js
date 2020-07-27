
import { IpStack } from './ipstack';

export const OpenWeatherMap = (() => {
  const loadMySessionWeather = async (userCity, units = 'metric') => {
    console.log('now getting the session weather');
    const API_KEY = process.env.WEATHER_API_KEY;
    console.log('Attempting get my session lat and long...');

    const wObj = userCity.getWeatherObject();
    const mySessionCity = await IpStack.getMyCity();

    if (mySessionCity) {
      try {
        const lat = mySessionCity.latitude;
        const long = mySessionCity.longitude;
        // const lang = mySessionCity.location.languages[0].code;
        const lang = 'en';

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
        // Updates country name from IpStack response.
        // OpenWeather APi does not provide country name.
        console.log(`Storing country name: ${mySessionCity.country_name}`);
        userCity.updateCountryObject(mySessionCity.country_name);
      } catch (err) {
        console.warn('Something went wrong with session weather :', err);
      }
    }
  };

  const loadMyCityWeather = async (city = 'london', units = 'metric', lang = 'en') => {
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
    return responseObject;
  };
  return {
    loadMySessionWeather,
    loadMyCityWeather,
  };
})();

export default OpenWeatherMap;