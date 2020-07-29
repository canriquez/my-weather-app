
export const DisplayController = (() => {
    /* Generic functions */

    const addTagToContainerId = (containerId, tagType, tagId = '', classes = '') => {
        const contentTag = document.getElementById(containerId);
        const newTag = document.createElement(tagType);
        if (tagId !== '') {
            newTag.setAttribute('id', tagId);
        }

        if (classes !== '') {
            newTag.setAttribute('class', classes);
        }
        contentTag.appendChild(newTag);
    };

    /* translate weather description id into degres for bar-arrow */
    const transWeatherDescription = (id) => {
        switch (true) {
            case (id >= 800 && id <= 804):
                return ((-8.249289925 * id * id) + (13208.61119 * id) - 5287208.395);
            case (id >= 701 && id <= 781):
                return ((-1.57282646E-3 * id * id) + (1.82322848 * id) - 465.3239501);
            case (id >= 200 && id <= 232):
                return ((2.079436717E-2 * id * id) + (-10.08168264 * id) + 1121.535281);
            case (id >= 300 && id <= 321):
                return ((-5.028726802E-2 * id * id) + (30.48646455 * id) - 4632.223787);
            case (id >= 500 && id <= 531):
                return ((1.112129237E-2 * id * id) + (-12.52634698 * id) + 3454.698266);
            case (id >= 600 && id <= 622):
                return ((-5.678032989E-2 * id * id) + (68.48273427 * id) - 20770.321);
            default:
                return 0;
        }
    };

    /* render wind, humidity and city boxes */

    const renderWindBox = (data, ready) => {
        let htmlTag = '<div class="data-card row-flex bs-xl lg-br ">';
        htmlTag += '<div class="card-title f-fil col-flex">Wind</div>';
        htmlTag += '<div class="speed col-flex">';
        htmlTag += `<p class="f-fil">${ready ? data.wind.speed.toFixed(1) : data.wind.speed}</p>`;
        htmlTag += '</div>';
        htmlTag += '<div class="win-dir col-flex">';
        htmlTag += `<p class="f-fil">${data.wind.unit}</p>`;
        htmlTag += '<div id="wind-arrow" class="wind-arrow"></div>';
        htmlTag += '</div></div>';
        return htmlTag;
    };

    const renderHumiBox = (data) => {
        let htmlTag = '<div class="data-card row-flex bs-xl hum lg-br ">';
        htmlTag += '<div class="card-title f-fil col-flex">Humidity</div>';
        htmlTag += '<div class="drop"></div>';
        htmlTag += '<div class="humidity col-flex">';
        htmlTag += `<p class="f-fil">${data.main.humidity}</p></div>`;
        htmlTag += '<div class="percent col-flex"><p class="f-fil">%</p></div></div>';
        return htmlTag;
    };

    const renderCityBox = (data) => {
        let htmlTag = '<div class="city-card hum lg-br ">';
        htmlTag += '<div id="inputCity" class="city-name f-fil">';
        htmlTag += `<p class="f-fil-m">${data.name}</p></div>`;
        htmlTag += '<div class="state-name">';
        htmlTag += ` <p class="f-fil-m">${data.country}</p></div>`;
        htmlTag += '<div class="country-flag">';
        htmlTag += `<img src="https://www.countryflags.io/${data.sys.country}/flat/64.png"></img>`;
        htmlTag += '</div></div>';
        return htmlTag;
    };

    const renderPhotoCredits = (data) => {
        console.log(data);
        let name = data.user.first_name !== '' ? data.user.first_name : '';
        let last = data.user.last_name !== '' ? data.user.last_name : '';
        const htmlTag = `<div class="img-credit"><span>Photo by: </span>
        <a href="${data.links.html}">${name} ${last}</a><span> on </span>
        <a href="https://unsplash.com?utm_source=your_app_name&amp;utm_medium=referral">Unsplash</a>
        </div>`;
        return htmlTag;
    };

    const renderDesignCredits = () => {
        const htmlTag = `<div class="design-credit">
        <a href="https://dribbble.com/dslv">UI design by: Piotr Sliwa @dribbble</a>
        </div>`;
        return htmlTag;
    };

    const renderWebCredits = () => {
        const htmlTag = `<div class="web-credit">
        <a href="https://www.carlosanriquez.com">Web Development: Carlos Anriquez | 2020</a>
        </div>`;
        return htmlTag;
    };

    const buildCredits = (data) => {
        let creditBox = renderWebCredits();
        creditBox += renderDesignCredits();
        creditBox += renderPhotoCredits(data);
        document.getElementById('credits').innerHTML = creditBox;
    };

    const renderRotateWindArrow = (data) => {
        const arrowTag = document.getElementById('wind-arrow');
        arrowTag.style.transform = `rotate(${data.wind.deg - 90}deg)`;
    };

    /* render full temperature and arrow wheather meter */

    const renderRotateBarArrow = (data) => {
        const toDeg = transWeatherDescription(data.weather.id);
        const arrowTag = document.getElementById('bar-arrow');
        arrowTag.style.transform = `translateX(-50%) translateY(-50%) rotate(${toDeg}deg)`;
    };

    const renderTempDash = (data, ready) => {
        let htmlTag = '<div id="temp" class="f-fil row-flex">';
        htmlTag += `<span>${ready ? data.main.temp.toFixed(1) : data.main.temp}</span>`;
        htmlTag += '<span>o</span>';
        htmlTag += `<span>${data.main.unit}</span></div>`;
        htmlTag += '<div id="back-scale">';
        htmlTag += '<div id="sunny" class="wi"></div>';
        htmlTag += '<div id="part-cloud" class="wi"></div>';
        htmlTag += '<div id="cloudy" class="wi"></div>';
        htmlTag += '<div id="showers" class="wi"></div>';
        htmlTag += '<div id="snowy" class="wi"></div>';
        htmlTag += '<div id="stormy" class="wi"></div></div>';
        htmlTag += '<div id="bar-arrow"></div>';
        htmlTag += `<div id="pressure" class="f-fil">${data.main.pressure}hPa</div>`;
        htmlTag += '<div id="unitButton" class="f-fil units"></div>';
        return htmlTag;
    };

    /* build functionc - combine render functions */


    const buildWinHumDash = (userCity) => {
        const data = userCity.getWeatherObject();
        const ready = userCity.getDataReady();
        addTagToContainerId('main-dash', 'div', 'wind-hum-dash', 'data-box row-flex');
        let dataBox = renderWindBox(data, ready);
        dataBox += renderHumiBox(data);
        document.getElementById('wind-hum-dash').innerHTML = dataBox;
        addTagToContainerId('main-dash', 'div', 'city-dash', 'data-box row-flex');
        const cityBox = renderCityBox(data);
        document.getElementById('city-dash').innerHTML = cityBox;
        renderRotateWindArrow(data);
    };

    const buildWeatherLab = (userCity) => {
        document.getElementById('main-dash').innerHTML = '';
        const data = userCity.getWeatherObject();
        const ready = userCity.getDataReady();
        addTagToContainerId('main-dash', 'div', 'weather-lab', 'lab');
        const tempDash = renderTempDash(data, ready);

        document.getElementById('weather-lab').innerHTML = tempDash;

        renderRotateBarArrow(data);
    };


    /* listeners */


    const addSystemToggle = (userCity) => {
        const toggleTag = document.getElementById('unitButton');
        const data = userCity.getWeatherObject();
        const ready = userCity.getDataReady();

        if (data.main.unit === 'C') {
            // change class to toggle button to settled to "C"
            toggleTag.classList.remove('f-units');
            toggleTag.classList.add('c-units');
        } else {
            // change class to toggle button to settled to "C"
            toggleTag.classList.remove('c-units');
            toggleTag.classList.add('f-units');
        }

        const toggleUnits = function toggleUnits(e) {
            e.stopPropagation();
            userCity.toggleUnits();

            // render temp tag with new values/units
            const tempDash = renderTempDash(data, ready);
            document.getElementById('weather-lab').innerHTML = tempDash;

            // render wind tag with new values/units
            let dataBox = renderWindBox(data, ready);
            dataBox += renderHumiBox(data);
            document.getElementById('wind-hum-dash').innerHTML = dataBox;

            // render back rotating arrow
            renderRotateBarArrow(data);

            // add systemToggle listener back
            addSystemToggle(userCity);
        };

        toggleTag.addEventListener('click', toggleUnits, false);
    };

    return {
        buildWinHumDash,
        buildWeatherLab,
        addSystemToggle,
        buildCredits,
    };
})();

export default DisplayController;