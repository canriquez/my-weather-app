export const myCity = () => {
  let dataReady = false;
  let weatherObject = {};
  let editingCity = false;

  const getTimeStamp = () => weatherObject.timeStamp;
  const setEditingCity = () => { editingCity = true; };
  const clearEditingCity = () => { editingCity = false; };
  const getEditingCity = () => editingCity;
  const setDataReady = () => { dataReady = true; };
  const clearDataReady = () => { dataReady = false; };
  const getDataReady = () => dataReady;
  const updateWeatherObject = (obj) => {
    weatherObject.clouds.all = obj.clouds.all;
    weatherObject.coord.lat = obj.coord.lat;
    weatherObject.coord.lon = obj.coord.lon;
    weatherObject.main.temp = obj.main.temp;
    weatherObject.main.pressure = obj.main.pressure;
    weatherObject.main.humidity = obj.main.humidity;
    weatherObject.main.temp_max = obj.main.temp_max;
    weatherObject.main.temp_min = obj.main.temp_min;
    weatherObject.name = obj.name;
    weatherObject.sys.id = obj.sys.id;
    weatherObject.sys.sunrise = obj.sys.sunrise;
    weatherObject.sys.sunset = obj.sys.sunset;
    weatherObject.sys.country = obj.sys.country;
    weatherObject.sys.type = obj.sys.type;
    weatherObject.timezone = obj.timezone;
    weatherObject.weather.description = obj.weather[0].description;
    weatherObject.weather.main = obj.weather[0].main;
    weatherObject.weather.id = obj.weather[0].id;
    weatherObject.wind.deg = obj.wind.deg;
    weatherObject.wind.speed = obj.wind.speed;
    dataReady = true;
  };
  const updateCountryObject = (name) => {
    weatherObject.country = name;
  };

  const getWeatherObject = () => weatherObject;
  const initWeatherObject = () => {
    weatherObject = {
      name: '...........',
      country: '..........',
      targetCity: 'empty',
      timeZone: '',
      timeStamp: '',
      clouds: { all: '' },
      coord: { lat: '', lon: '' },
      main: {
        temp: '-.-', unit: 'C', pressure: '----', humidity: '--', temp_max: '', temp_min: '',
      },
      sys: {
        id: '', sunrise: '', sunset: '', country: 'AR', type: '',
      },
      weather: {
        id: 0, main: '', description: '', arrow: 90,
      },
      wind: { deg: 0, speed: '-.-', unit: 'km/h' },
    };
    dataReady = false;
  };

  const toggleUnits = () => {
    if (weatherObject.main.unit === 'C') {
      const degF = 32 + ((9 / 5) * (parseFloat(weatherObject.main.temp)));
      weatherObject.main.temp = degF;
      weatherObject.main.unit = 'F';
      // calculate F degress.
      // update object temp to F degrees
      // update object temp units to F unit
      const mph = parseFloat(weatherObject.wind.speed) / 1.609;
      weatherObject.wind.speed = mph;
      weatherObject.wind.unit = 'mph';
      // Calculate the wind speed to mph
      // update Object speed and unit to mph
    } else {
      const degC = (parseFloat(weatherObject.main.temp) - 32) * (5 / 9);
      weatherObject.main.temp = degC;
      weatherObject.main.unit = 'C';
      // calculate C degress.
      // update object temp to C degrees
      // update object temp units to C unit
      const kph = parseFloat(weatherObject.wind.speed) * 1.609;
      weatherObject.wind.speed = kph;
      weatherObject.wind.unit = 'km/h';
      // Calculate the wind speed to kph
      // update Object speed and unit to kph
    }
    return weatherObject.main.unit;
  };


  return {
    getTimeStamp,
    setDataReady,
    clearDataReady,
    getDataReady,
    updateWeatherObject,
    getWeatherObject,
    initWeatherObject,
    setEditingCity,
    clearEditingCity,
    getEditingCity,
    toggleUnits,
    updateCountryObject,
  };
};

export default myCity;