# My Weather App <img src="./src/icons/sunny.svg" alt="alt text" width="20"><img src="./src/icons/showers.svg" alt="alt text" width="20"><img src="./src/icons/drop.svg" alt="alt text" width="20"><img src="./src/icons/snowy.svg" alt="alt text" width="20">

Dynamic Weather App. Built with JavaScript HTML/CSS and API services. 

![](app_image.gif)

# Project Details

The app uses information from the following main APIs:

- [Openweathermap.org API](https://openweathermap.org/) for worldwide city weather information. You will need to create an account and generate a private API key.
- [cloudflare](https://www.cloudflare.com/) for Fetching client's current public IP.
- [ipstack.com](https://ipstack.com/) for Public IP to Coordinates / World City service  API. You will need to create an account and generate a private API key.
- [Unsplash](https://unsplash.com/documentation#search-photos) for great weather images service API. You will need to create an account and generate a private API key.

# live demo

[live app](http://raw.githack.com/canriquez/my-weather-app/feat_app/dist/index.html)

# Key design information
- The app uses myCity factory function to store key weather information and basic methods used to manage app logic sequences.
- All API services are managed using function collections hosted in specific files (components), exposed using the module pattern.
- applogic.js contains the main functions organizing the initial session weather search. #initSessionWeather() method would organize the module methods to get the user's IP, coordinates, and a final query to the open weather map API to get the initial nearby city for the first weather readout. initCityQueryWeather() would organize an Adhoc query for a specific city.
- DisplayController module contains all functions to handle the screen renders.
- The Barometer Arrow uses a set of formulas to "translate" the weather description id [openweathermap.org weather conditions codes](https://openweathermap.org/weather-conditions) into correspondent degrees used by the CSS transform property "rotate", to point to the right weather description icon.

```
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
```
- The details for these equations and the data source used for the calculations are hosted in the /src/docs folder.

# User Story
- The user accesses the live link, and immediately the app fetches the current user IP and queries estimated nearby city weather. This initial information gets displayed on the weather dashboard from the start.
- The user can change the city by clicking/touching the city name displayed on the dashboard.
- If the new city name is found, the dashboard will render the current weather information.

- The barometer arrow (simil analogic arrow) and the wind arrow <img src="./src/icons/wind_arrow.svg" alt="alt text" width="15"> icon will turn pointing to the current weather description after a new city is searched and found.

- Temperature and Wind units will toggle between metric and imperial system, by clicking / touching the icon <img src="./src/icons/system_switch-C.svg" alt="alt text" width="25"> . The temperature units will toggle between Centigrades and Faranhaid on each click of the icon. The same will ocurr for wid speed between km/h and mph units.

# Dashboard design inspiration:
- The User Interface design was inspired by [Piotr Sliwa "Weather widget](https://dribbble.com/shots/1127407-Weather-widget) original design.

# Background photography credits (Unsplash)
- The app sources random background pictures using the 'weather description' as a keyword for the picture theme.
- Each image is properly credited dynamically. Picture's creator username and portfolio link display at the bottom of the main app screen. 


## Built With

- HTML/CSS, Javascript, Webpack, NPM, yarn.
- ESlint, Stylelint
- VSCode


## Getting Started


To get a local copy up and running, follow these simple example steps.

### Prerequisites
- To install the app in your system, make sure you have node/npm installed. [get npm](https://www.npmjs.com/get-npm)

### Setup
- Clone the repository in your system by using: 

``` git clone  ```
- The app uses the library "dotenv-webpack" to handle all secrets and API keys for every used service.
- After cloning the repo, create a file ```.env``` to include all the necesary api keys. Create the accounts in each service and complete the ```.env``` file as follows:

```
APP_TITLE="My Weather App"
WEATHER_API_KEY =<add your API key>
IPSTACK_API=<add your API key>
UNS_API=<add your API key>
```

### Install
- Next step is to CD into the local repository and run:

``` npm install ```
``` npm run build ```



## Author

👤 ***Carlos Anriquez***

- Github: [@canriquez](https://github.com/canriquez)
- Twitter: [@cranriquez](https://twitter.com/cranriquez)
- Linkedin: [linkedin](https://www.linkedin.com/in/carlosanriquez/)
- Portfolio: [carlosanriquez.com](https://www.carlosanriquez.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Family, always my family.
- The Beagles!

## 📝 License

This project is [MIT](./LICENSE) licensed.
