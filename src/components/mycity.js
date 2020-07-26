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
    const getWeatherObject = () => weatherObject;
    const initWeatherObject = () => {
        weatherObject = {
            name: '...........',
            timeZone: '',
            timeStamp: '',
            clouds: { all: '' },
            coord: { lat: '', lon: '' },
            main: {
                temp: '-.-', pressure: '----', humidity: '--', temp_max: '', temp_min: '',
            },
            sys: {
                id: '', sunrise: '', sunset: '', country: 'AR', type: '',
            },
            weather: {
                id: 0, main: '', description: '', arrow: 90,
            },
            wind: { deg: 0, speed: '-.-' },
        };
        dataReady = false;
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
    };
};

export default myCity;