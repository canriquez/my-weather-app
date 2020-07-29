/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/futura/Futura_Heavy_font.ttf */ \"./src/fonts/futura/Futura_Heavy_font.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fonts/futura/futura_medium_bt.ttf */ \"./src/fonts/futura/futura_medium_bt.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./fonts/futura/futura_light_bt.ttf */ \"./src/fonts/futura/futura_light_bt.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./icons/wind_arrow.svg */ \"./src/icons/wind_arrow.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./icons/drop.svg */ \"./src/icons/drop.svg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./icons/check.svg */ \"./src/icons/check.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./icons/cancel.svg */ \"./src/icons/cancel.svg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ./images/barom_scale.svg */ \"./src/images/barom_scale.svg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ./icons/sunny.svg */ \"./src/icons/sunny.svg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ./icons/stormy.svg */ \"./src/icons/stormy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ./icons/snowy.svg */ \"./src/icons/snowy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ./icons/part-cloud.svg */ \"./src/icons/part-cloud.svg\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ./icons/showers.svg */ \"./src/icons/showers.svg\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ./icons/cloudy.svg */ \"./src/icons/cloudy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ./images/bar-arrow-01.svg */ \"./src/images/bar-arrow-01.svg\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ./icons/system_switch-C.svg */ \"./src/icons/system_switch-C.svg\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ./icons/system_switch-F.svg */ \"./src/icons/system_switch-F.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  transition: all 1s cubic-bezier(0.45, 1.4, 0.12, 1.8);\\n}\\n\\nbody {\\n  background-color: gray;\\n  font-family: futura-light, sans-serif;\\n  overflow: hidden;\\n}\\n\\n/* ================ fonts ================ */\\n\\n@font-face {\\n  font-family: futura-bold;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"ttf\\\");\\n  font-weight: 600;\\n}\\n\\n@font-face {\\n  font-family: futura-normal;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"ttf\\\");\\n  font-weight: 400;\\n}\\n\\n@font-face {\\n  font-family: futura-light;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"ttf\\\");\\n  font-weight: 200;\\n}\\n\\n/* ================ generic ================ */\\n\\n.row-flex {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.col-flex {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.hide {\\n  display: none !important;\\n}\\n\\n.show {\\n  display: \\\"\\\" !important;\\n}\\n\\n.bs-xl {\\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n}\\n\\n.bs-lg {\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n}\\n\\n.lg-br {\\n  border-radius: 2%;\\n}\\n\\n.f-fil {\\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));\\n}\\n\\n.f-fil-m {\\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));\\n}\\n\\n/* ================ section ================ */\\n\\nnav h1 {\\n  color: white;\\n}\\n\\nsection {\\n  margin: 20px 0;\\n}\\n\\nsection form {\\n  justify-content: center !important;\\n}\\n\\nsection div {\\n  margin: 0 auto;\\n}\\n\\n/* ================= main dash ================= */\\n\\n#main-dash {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translateX(-50%) translateY(-50%);\\n  width: 100%;\\n  max-width: 530px;\\n\\n  /*   margin: 0 auto; */\\n  min-height: 571px;\\n}\\n\\n/* ================ data-cards ================ */\\n\\n.data-card {\\n  position: relative;\\n  justify-content: space-around;\\n  width: 45vw;\\n  margin: 15px;\\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);\\n}\\n\\n.hum {\\n  justify-content: space-around;\\n}\\n\\n.speed {\\n  width: 50%;\\n}\\n\\n.speed p {\\n  font-size: 2.5rem;\\n  margin: 0;\\n  color: white;\\n}\\n\\n.win-dir {\\n  width: 50%;\\n}\\n\\n.win-dir p {\\n  margin: 0;\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n\\n.wind-arrow {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\\n  position: relative;\\n  display: inline-block;\\n  width: 24px;\\n  height: 24px;\\n  margin: 0;\\n  fill: white;\\n}\\n\\n.percent {\\n  width: 20%;\\n}\\n\\n.percent p {\\n  margin: 0 0 15px 0;\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n\\n.humidity {\\n  width: 33%;\\n}\\n\\n.humidity p {\\n  font-size: 2.5rem;\\n  margin: 0;\\n  color: white;\\n}\\n\\n.drop {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\\n  position: relative;\\n  display: inline-block;\\n  width: 30px;\\n  height: 30px;\\n  margin: 0;\\n  fill: white;\\n}\\n\\n.card-title {\\n  position: absolute;\\n  top: -10px;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  margin-bottom: 0;\\n  text-transform: uppercase;\\n  color: white;\\n}\\n\\n/* City Card information */\\n\\n.city-card {\\n  position: relative;\\n  justify-content: space-around;\\n  width: 100%;\\n  margin: 5px 15px 15px 15px;\\n}\\n\\n.city-name p {\\n  font-size: 2rem;\\n  line-height: 2.1rem;\\n}\\n\\n.state-name p {\\n  font-size: 1.2rem;\\n  line-height: 2.1rem;\\n}\\n\\n.state-name p,\\n.city-name p {\\n  font-family: futura-light, sans-serif;\\n  margin-bottom: 0;\\n  text-transform: uppercase;\\n  color: white;\\n}\\n\\n.city-name p:hover {\\n  border: dashed 1px white;\\n}\\n\\n.country-flag {\\n  position: absolute;\\n  bottom: 0;\\n  right: 5px;\\n}\\n\\n.country-flag img {\\n  width: 50px;\\n  opacity: 0.5;\\n}\\n\\n/* Add new city action */\\n\\n.input-new-city {\\n  width: 70%;\\n  font-size: 1.8rem;\\n  line-height: 3.5rem;\\n  background-color: transparent;\\n  border: none;\\n  color: white;\\n  text-transform: uppercase;\\n}\\n\\n.input-city-show {\\n  border: dashed 1px white;\\n}\\n\\n.edit-action-btn {\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\\n  position: relative;\\n  display: inline-block;\\n  width: 30px;\\n  height: 30px;\\n}\\n\\n#ok-text {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n#cancel-text {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n/* ================ weather lab | back-Scale ================ */\\n\\n.lab {\\n  overflow: hidden;\\n  width: 100%;\\n  position: relative;\\n  padding: 5px;\\n  margin: 20px auto 5px auto;\\n  max-width: 320px;\\n  max-height: 284px;\\n  height: 50vh;\\n  min-height: 270px;\\n  background-color: transparent;\\n}\\n\\n#back-scale {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(255, 255, 255, 0.3);\\n  -webkit-mask-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  mask-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  -webkit-mask-repeat: no-repeat;\\n  mask-repeat: no-repeat;\\n  -webkit-mask-position: center;\\n  mask-position: center;\\n}\\n\\n.wi {\\n  position: absolute;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  width: 30px;\\n  height: 30px;\\n  margin: 0;\\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\\n}\\n\\n#sunny {\\n  bottom: 16%;\\n  right: 22%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n\\n#stormy {\\n  bottom: 50%;\\n  left: 12%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n}\\n\\n#snowy {\\n  bottom: 16%;\\n  left: 22%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n}\\n\\n#part-cloud {\\n  bottom: 51%;\\n  right: 12%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n\\n#showers {\\n  top: 13%;\\n  left: 26%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n\\n#cloudy {\\n  top: 12%;\\n  right: 21%;\\n  transform: translateX(-50%);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n}\\n\\n#bar-arrow {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n  width: 110%;\\n  height: 110%;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  transition: all 1s ease-in-out;\\n}\\n\\n#pressure {\\n  position: absolute;\\n  bottom: 30%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  color: #fff;\\n  font-size: 1.3rem;\\n}\\n\\n#temp {\\n  position: absolute;\\n  top: 30%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  color: #fff;\\n  font-size: 2.8rem;\\n  z-index: 2;\\n}\\n\\n#temp span:nth-child(2) {\\n  align-self: flex-start;\\n  font-size: 1.5rem;\\n\\n  /* vertical-align: super; */\\n}\\n\\n.units {\\n  bottom: 10%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  position: absolute;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: 90% 90%;\\n  width: 50.53px;\\n  height: 25.33px;\\n  margin: 0;\\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\\n}\\n\\n.c-units {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n  cursor: pointer;\\n}\\n\\n.f-units {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n  cursor: pointer;\\n}\\n\\n/*  Background - image */\\n.image {\\n  /*   background-image: url(https://images.unsplash.com/photo-1572553257259-272f8b389fa8?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE1MTEzM30;);\\n */\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n\\n  /*   background-color: rgba(255, 255, 255, 0.2); */\\n  width: 100%;\\n  height: 100%;\\n\\n  /* background-blend-mode: difference; */\\n\\n  /*  opacity: 0.5; */\\n  z-index: -2;\\n}\\n\\n.image-gradient {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  background: rgba(0, 0, 0, 0.6);\\n  z-index: -1;\\n}\\n\\n/* =========== credits ============ */\\n\\n#credits {\\n  position: fixed;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 100%;\\n}\\n\\n.web-credit {\\n  margin-bottom: 5px;\\n  border-bottom: 0.5px solid dimgray;\\n}\\n\\n.web-credit a {\\n  color: burlywood;\\n  text-decoration: none;\\n  cursor: pointer;\\n  z-index: 0;\\n  font-size: 0.7rem;\\n  text-align: right;\\n}\\n\\n.design-credit a {\\n  color: dimgray;\\n  text-decoration: none;\\n  cursor: pointer;\\n  font-size: 0.6rem;\\n  z-index: 0;\\n}\\n\\n.img-credit {\\n  margin-bottom: 5px;\\n}\\n\\n.img-credit a {\\n  color: dimgray;\\n  cursor: pointer;\\n  font-size: 0.6rem;\\n  z-index: 0;\\n}\\n\\n.img-credit span {\\n  color: dimgray;\\n  font-size: 0.9rem;\\n  z-index: 0;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  /* ================= credits ================ */\\n\\n  .web-credit a {\\n    font-size: 1.1rem;\\n  }\\n\\n  .design-credit a {\\n    font-size: 0.9rem;\\n  }\\n\\n  .img-credit a {\\n    font-size: 0.9rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/applogic.js":
/*!************************************!*\
  !*** ./src/components/applogic.js ***!
  \************************************/
/*! exports provided: AppLogic, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppLogic\", function() { return AppLogic; });\n/* harmony import */ var _openweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openweather */ \"./src/components/openweather.js\");\n/* harmony import */ var _unsplash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsplash */ \"./src/components/unsplash.js\");\n/* harmony import */ var _displaycontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaycontroller */ \"./src/components/displaycontroller.js\");\n/* harmony import */ var _restcountries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restcountries */ \"./src/components/restcountries.js\");\n\n\n\n\n\n\nconst AppLogic = (() => {\n  const addCityListeners = (userCity) => {\n    const currentCityName = userCity.getWeatherObject().name;\n    const cityTag = document.getElementById('inputCity');\n\n\n    const inputCity = function inputCity(e) {\n      if (userCity.getEditingCity()) { return; }\n      userCity.setEditingCity();\n      cityTag.classList.add('row-flex');\n      cityTag.classList.add('input-city-show');\n      this.removeEventListener(e, inputCity, true);\n      this.innerHTML = `<input type=\"text\" id=\"newCityName\" name=\"newCityName\" \n                    value=\"${currentCityName}\"\n                    class=\"input-new-city f-fil\" \n                    required minlength=\"4\" maxlength=\"20\" size=\"10\">\n                    <div id=\"ok-text\" class=\"edit-action-btn\"></div>\n                    <div id=\"cancel-text\" class=\"edit-action-btn\"></div>`;\n\n      // eslint-disable-next-line no-use-before-define\n      updateCityListener(userCity);\n      // eslint-disable-next-line no-use-before-define\n      cancellCityListener(userCity);\n    };\n\n\n    cityTag.addEventListener('click', inputCity, false);\n  };\n\n\n  const initSessionWeather = async function initSessionWeather(userCity) {\n    try {\n      await _openweather__WEBPACK_IMPORTED_MODULE_0__[\"OpenWeatherMap\"].loadMySessionWeather(userCity);\n      // userCity.initWeatherObject();\n      const currentObject = userCity.getWeatherObject();\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWeatherLab(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWinHumDash(userCity);\n      addCityListeners(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].addSystemToggle(userCity);\n      const imageKey = `${currentObject.weather.description} weather `;\n      const creditsInfo = await _unsplash__WEBPACK_IMPORTED_MODULE_1__[\"UnsPlash\"].loadImg(imageKey);\n\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildCredits(creditsInfo);\n    } catch (err) {\n      throw ('Something went wrong with initSessionWeather :', err);\n    }\n  };\n\n  const initCityQueryWeather = async (userCity) => {\n    const cityQuery = userCity.getWeatherObject().targetCity;\n    try {\n      const cityObject = await _openweather__WEBPACK_IMPORTED_MODULE_0__[\"OpenWeatherMap\"].loadMyCityWeather(cityQuery);\n      if (cityObject.cod === 200) {\n        // city has been found - store new value\n        userCity.updateWeatherObject(cityObject);\n      }\n      const currentObject = userCity.getWeatherObject();\n\n      // Fetching the country's complete name\n      const countryName = await _restcountries__WEBPACK_IMPORTED_MODULE_3__[\"RestCountries\"].getCountryName(currentObject.sys.country);\n      // OpenWeather APi does not provide country name.\n      userCity.updateCountryObject(countryName);\n\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWeatherLab(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWinHumDash(userCity);\n      addCityListeners(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].addSystemToggle(userCity);\n      userCity.clearEditingCity();\n      const imageKey = `${currentObject.weather.description} weather `;\n      const creditsInfo = await _unsplash__WEBPACK_IMPORTED_MODULE_1__[\"UnsPlash\"].loadImg(imageKey);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildCredits(creditsInfo);\n    } catch (err) {\n      throw ('Something went wrong with initCityQueryWeather :', err);\n    }\n  };\n\n  /* listeners */\n\n  const updateCityListener = (userCity) => {\n    const okText = document.getElementById('ok-text');\n\n    const storeNewCity = function storeNewCity() {\n      const cityInputTag = document.getElementById('newCityName');\n      const cityObj = userCity.getWeatherObject();\n      cityObj.targetCity = cityInputTag.value;\n      initCityQueryWeather(userCity);\n    };\n    okText.addEventListener('click', storeNewCity, false);\n  };\n\n  const cancellCityListener = (userCity) => {\n    const cancellTag = document.getElementById('cancel-text');\n\n    const cancellNewCity = function cancellNewCity(e) {\n      e.stopPropagation();\n\n      // userCity.clearDataReady();\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWeatherLab(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].buildWinHumDash(userCity);\n      addCityListeners(userCity);\n      _displaycontroller__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].addSystemToggle(userCity);\n      userCity.clearEditingCity();\n    };\n    cancellTag.addEventListener('click', cancellNewCity, false);\n  };\n\n\n  return {\n    initSessionWeather,\n    initCityQueryWeather,\n\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLogic);\n\n\n//# sourceURL=webpack:///./src/components/applogic.js?");

/***/ }),

/***/ "./src/components/cloudflare.js":
/*!**************************************!*\
  !*** ./src/components/cloudflare.js ***!
  \**************************************/
/*! exports provided: CloudFlare, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloudFlare\", function() { return CloudFlare; });\n\nconst CloudFlare = (() => {\n  const getMyIP = async () => {\n    const ipObj = { ip: '', loc: '' };\n    try {\n      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace',\n        { mode: 'cors' });\n      const responseText = await response.text();\n      const resArr = responseText.split('\\n');\n\n      for (let i = 0; i < resArr.length; i += 1) {\n        const line = resArr[i].split('=');\n        // eslint-disable-next-line prefer-destructuring\n        if (line[0] === 'ip') { ipObj.ip = line[1]; }\n        // eslint-disable-next-line prefer-destructuring\n        if (line[0] === 'loc') { ipObj.loc = line[1]; }\n      }\n      return ipObj;\n    } catch (err) {\n      throw ('Something went wrong with cloudflare :', err);\n    }\n  };\n  return {\n    getMyIP,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CloudFlare);\n\n//# sourceURL=webpack:///./src/components/cloudflare.js?");

/***/ }),

/***/ "./src/components/displaycontroller.js":
/*!*********************************************!*\
  !*** ./src/components/displaycontroller.js ***!
  \*********************************************/
/*! exports provided: DisplayController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayController\", function() { return DisplayController; });\n\nconst DisplayController = (() => {\n    /* Generic functions */\n\n    const addTagToContainerId = (containerId, tagType, tagId = '', classes = '') => {\n        const contentTag = document.getElementById(containerId);\n        const newTag = document.createElement(tagType);\n        if (tagId !== '') {\n            newTag.setAttribute('id', tagId);\n        }\n\n        if (classes !== '') {\n            newTag.setAttribute('class', classes);\n        }\n        contentTag.appendChild(newTag);\n    };\n\n    /* translate weather description id into degres for bar-arrow */\n    const transWeatherDescription = (id) => {\n        switch (true) {\n            case (id >= 800 && id <= 804):\n                return ((-8.249289925 * id * id) + (13208.61119 * id) - 5287208.395);\n            case (id >= 701 && id <= 781):\n                return ((-1.57282646E-3 * id * id) + (1.82322848 * id) - 465.3239501);\n            case (id >= 200 && id <= 232):\n                return ((2.079436717E-2 * id * id) + (-10.08168264 * id) + 1121.535281);\n            case (id >= 300 && id <= 321):\n                return ((-5.028726802E-2 * id * id) + (30.48646455 * id) - 4632.223787);\n            case (id >= 500 && id <= 531):\n                return ((1.112129237E-2 * id * id) + (-12.52634698 * id) + 3454.698266);\n            case (id >= 600 && id <= 622):\n                return ((-5.678032989E-2 * id * id) + (68.48273427 * id) - 20770.321);\n            default:\n                return 0;\n        }\n    };\n\n    /* render wind, humidity and city boxes */\n\n    const renderWindBox = (data, ready) => {\n        let htmlTag = '<div class=\"data-card row-flex bs-xl lg-br \">';\n        htmlTag += '<div class=\"card-title f-fil col-flex\">Wind</div>';\n        htmlTag += '<div class=\"speed col-flex\">';\n        htmlTag += `<p class=\"f-fil\">${ready ? data.wind.speed.toFixed(1) : data.wind.speed}</p>`;\n        htmlTag += '</div>';\n        htmlTag += '<div class=\"win-dir col-flex\">';\n        htmlTag += `<p class=\"f-fil\">${data.wind.unit}</p>`;\n        htmlTag += '<div id=\"wind-arrow\" class=\"wind-arrow\"></div>';\n        htmlTag += '</div></div>';\n        return htmlTag;\n    };\n\n    const renderHumiBox = (data) => {\n        let htmlTag = '<div class=\"data-card row-flex bs-xl hum lg-br \">';\n        htmlTag += '<div class=\"card-title f-fil col-flex\">Humidity</div>';\n        htmlTag += '<div class=\"drop\"></div>';\n        htmlTag += '<div class=\"humidity col-flex\">';\n        htmlTag += `<p class=\"f-fil\">${data.main.humidity}</p></div>`;\n        htmlTag += '<div class=\"percent col-flex\"><p class=\"f-fil\">%</p></div></div>';\n        return htmlTag;\n    };\n\n    const renderCityBox = (data) => {\n        let htmlTag = '<div class=\"city-card hum lg-br \">';\n        htmlTag += '<div id=\"inputCity\" class=\"city-name f-fil\">';\n        htmlTag += `<p class=\"f-fil-m\">${data.name}</p></div>`;\n        htmlTag += '<div class=\"state-name\">';\n        htmlTag += ` <p class=\"f-fil-m\">${data.country}</p></div>`;\n        htmlTag += '<div class=\"country-flag\">';\n        htmlTag += `<img src=\"https://www.countryflags.io/${data.sys.country}/flat/64.png\"></img>`;\n        htmlTag += '</div></div>';\n        return htmlTag;\n    };\n\n    const renderPhotoCredits = (data) => {\n        console.log(data);\n        let name = data.user.first_name !== '' ? data.user.first_name : '';\n        let last = data.user.last_name !== '' ? data.user.last_name : '';\n        const htmlTag = `<div class=\"img-credit\"><span>Photo by: </span>\n        <a href=\"${data.links.html}\">${name} ${last}</a><span> on </span>\n        <a href=\"https://unsplash.com?utm_source=your_app_name&amp;utm_medium=referral\">Unsplash</a>\n        </div>`;\n        return htmlTag;\n    };\n\n    const renderDesignCredits = () => {\n        const htmlTag = `<div class=\"design-credit\">\n        <a href=\"https://dribbble.com/dslv\">UI design by: Piotr Sliwa @dribbble</a>\n        </div>`;\n        return htmlTag;\n    };\n\n    const renderWebCredits = () => {\n        const htmlTag = `<div class=\"web-credit\">\n        <a href=\"https://www.carlosanriquez.com\">Web Development: Carlos Anriquez | 2020</a>\n        </div>`;\n        return htmlTag;\n    };\n\n    const buildCredits = (data) => {\n        let creditBox = renderWebCredits();\n        creditBox += renderDesignCredits();\n        creditBox += renderPhotoCredits(data);\n        document.getElementById('credits').innerHTML = creditBox;\n    };\n\n    const renderRotateWindArrow = (data) => {\n        const arrowTag = document.getElementById('wind-arrow');\n        arrowTag.style.transform = `rotate(${data.wind.deg - 90}deg)`;\n    };\n\n    /* render full temperature and arrow wheather meter */\n\n    const renderRotateBarArrow = (data) => {\n        const toDeg = transWeatherDescription(data.weather.id);\n        const arrowTag = document.getElementById('bar-arrow');\n        arrowTag.style.transform = `translateX(-50%) translateY(-50%) rotate(${toDeg}deg)`;\n    };\n\n    const renderTempDash = (data, ready) => {\n        let htmlTag = '<div id=\"temp\" class=\"f-fil row-flex\">';\n        htmlTag += `<span>${ready ? data.main.temp.toFixed(1) : data.main.temp}</span>`;\n        htmlTag += '<span>o</span>';\n        htmlTag += `<span>${data.main.unit}</span></div>`;\n        htmlTag += '<div id=\"back-scale\">';\n        htmlTag += '<div id=\"sunny\" class=\"wi\"></div>';\n        htmlTag += '<div id=\"part-cloud\" class=\"wi\"></div>';\n        htmlTag += '<div id=\"cloudy\" class=\"wi\"></div>';\n        htmlTag += '<div id=\"showers\" class=\"wi\"></div>';\n        htmlTag += '<div id=\"snowy\" class=\"wi\"></div>';\n        htmlTag += '<div id=\"stormy\" class=\"wi\"></div></div>';\n        htmlTag += '<div id=\"bar-arrow\"></div>';\n        htmlTag += `<div id=\"pressure\" class=\"f-fil\">${data.main.pressure}hPa</div>`;\n        htmlTag += '<div id=\"unitButton\" class=\"f-fil units\"></div>';\n        return htmlTag;\n    };\n\n    /* build functionc - combine render functions */\n\n\n    const buildWinHumDash = (userCity) => {\n        const data = userCity.getWeatherObject();\n        const ready = userCity.getDataReady();\n        addTagToContainerId('main-dash', 'div', 'wind-hum-dash', 'data-box row-flex');\n        let dataBox = renderWindBox(data, ready);\n        dataBox += renderHumiBox(data);\n        document.getElementById('wind-hum-dash').innerHTML = dataBox;\n        addTagToContainerId('main-dash', 'div', 'city-dash', 'data-box row-flex');\n        const cityBox = renderCityBox(data);\n        document.getElementById('city-dash').innerHTML = cityBox;\n        renderRotateWindArrow(data);\n    };\n\n    const buildWeatherLab = (userCity) => {\n        document.getElementById('main-dash').innerHTML = '';\n        const data = userCity.getWeatherObject();\n        const ready = userCity.getDataReady();\n        addTagToContainerId('main-dash', 'div', 'weather-lab', 'lab');\n        const tempDash = renderTempDash(data, ready);\n\n        document.getElementById('weather-lab').innerHTML = tempDash;\n\n        renderRotateBarArrow(data);\n    };\n\n\n    /* listeners */\n\n\n    const addSystemToggle = (userCity) => {\n        const toggleTag = document.getElementById('unitButton');\n        const data = userCity.getWeatherObject();\n        const ready = userCity.getDataReady();\n\n        if (data.main.unit === 'C') {\n            // change class to toggle button to settled to \"C\"\n            toggleTag.classList.remove('f-units');\n            toggleTag.classList.add('c-units');\n        } else {\n            // change class to toggle button to settled to \"C\"\n            toggleTag.classList.remove('c-units');\n            toggleTag.classList.add('f-units');\n        }\n\n        const toggleUnits = function toggleUnits(e) {\n            e.stopPropagation();\n            userCity.toggleUnits();\n\n            // render temp tag with new values/units\n            const tempDash = renderTempDash(data, ready);\n            document.getElementById('weather-lab').innerHTML = tempDash;\n\n            // render wind tag with new values/units\n            let dataBox = renderWindBox(data, ready);\n            dataBox += renderHumiBox(data);\n            document.getElementById('wind-hum-dash').innerHTML = dataBox;\n\n            // render back rotating arrow\n            renderRotateBarArrow(data);\n\n            // add systemToggle listener back\n            addSystemToggle(userCity);\n        };\n\n        toggleTag.addEventListener('click', toggleUnits, false);\n    };\n\n    return {\n        buildWinHumDash,\n        buildWeatherLab,\n        addSystemToggle,\n        buildCredits,\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayController);\n\n//# sourceURL=webpack:///./src/components/displaycontroller.js?");

/***/ }),

/***/ "./src/components/freegeoip.js":
/*!*************************************!*\
  !*** ./src/components/freegeoip.js ***!
  \*************************************/
/*! exports provided: FreeGeoIp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FreeGeoIp\", function() { return FreeGeoIp; });\n/* harmony import */ var _cloudflare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloudflare */ \"./src/components/cloudflare.js\");\n\n\n\nconst FreeGeoIp = (() => {\n  const getMyCity = async () => {\n    let responseObject = { city: 'Santiago del Estero', country_code: 'AR', country_name: 'Argentina' };\n    const myIp = await _cloudflare__WEBPACK_IMPORTED_MODULE_0__[\"CloudFlare\"].getMyIP();\n    if (myIp.ip !== '') {\n      try {\n        const response = await fetch(`https://freegeoip.app/json/${myIp.ip}`,\n          { mode: 'cors' });\n        responseObject = await response.json();\n        // Fail Safe - If city retrieve failes, I fall back to my Home Town - Argentina\n        if (responseObject.city === '') {\n          responseObject = { city: 'Santiago del Estero', country_code: 'AR', country_name: 'Argentina' };\n        }\n        return responseObject;\n      } catch (err) {\n        throw ('Something went wrong with ipstack :', err);\n      }\n    } else {\n      return responseObject;\n    }\n  };\n  return {\n    getMyCity,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FreeGeoIp);\n\n//# sourceURL=webpack:///./src/components/freegeoip.js?");

/***/ }),

/***/ "./src/components/mycity.js":
/*!**********************************!*\
  !*** ./src/components/mycity.js ***!
  \**********************************/
/*! exports provided: myCity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myCity\", function() { return myCity; });\nconst myCity = () => {\n  let dataReady = false;\n  let weatherObject = {};\n  let editingCity = false;\n\n  const getTimeStamp = () => weatherObject.timeStamp;\n  const setEditingCity = () => { editingCity = true; };\n  const clearEditingCity = () => { editingCity = false; };\n  const getEditingCity = () => editingCity;\n  const setDataReady = () => { dataReady = true; };\n  const clearDataReady = () => { dataReady = false; };\n  const getDataReady = () => dataReady;\n  const updateWeatherObject = (obj) => {\n    weatherObject.clouds.all = obj.clouds.all;\n    weatherObject.coord.lat = obj.coord.lat;\n    weatherObject.coord.lon = obj.coord.lon;\n    weatherObject.main.temp = obj.main.temp;\n    weatherObject.main.pressure = obj.main.pressure;\n    weatherObject.main.humidity = obj.main.humidity;\n    weatherObject.main.temp_max = obj.main.temp_max;\n    weatherObject.main.temp_min = obj.main.temp_min;\n    weatherObject.name = obj.name;\n    weatherObject.sys.id = obj.sys.id;\n    weatherObject.sys.sunrise = obj.sys.sunrise;\n    weatherObject.sys.sunset = obj.sys.sunset;\n    weatherObject.sys.country = obj.sys.country;\n    weatherObject.sys.type = obj.sys.type;\n    weatherObject.timezone = obj.timezone;\n    weatherObject.weather.description = obj.weather[0].description;\n    weatherObject.weather.main = obj.weather[0].main;\n    weatherObject.weather.id = obj.weather[0].id;\n    weatherObject.wind.deg = obj.wind.deg;\n    weatherObject.wind.speed = obj.wind.speed;\n    dataReady = true;\n  };\n  const updateCountryObject = (name) => {\n    weatherObject.country = name;\n  };\n\n  const getWeatherObject = () => weatherObject;\n  const initWeatherObject = () => {\n    weatherObject = {\n      name: '...........',\n      country: '..........',\n      targetCity: 'empty',\n      timeZone: '',\n      timeStamp: '',\n      clouds: { all: '' },\n      coord: { lat: '', lon: '' },\n      main: {\n        temp: '-.-', unit: 'C', pressure: '----', humidity: '--', temp_max: '', temp_min: '',\n      },\n      sys: {\n        id: '', sunrise: '', sunset: '', country: 'AR', type: '',\n      },\n      weather: {\n        id: 0, main: '', description: '', arrow: 90,\n      },\n      wind: { deg: 0, speed: '-.-', unit: 'km/h' },\n    };\n    dataReady = false;\n  };\n\n  const toggleUnits = () => {\n    if (weatherObject.main.unit === 'C') {\n      const degF = 32 + ((9 / 5) * (parseFloat(weatherObject.main.temp)));\n      weatherObject.main.temp = degF;\n      weatherObject.main.unit = 'F';\n      // calculate F degress.\n      // update object temp to F degrees\n      // update object temp units to F unit\n      const mph = parseFloat(weatherObject.wind.speed) / 1.609;\n      weatherObject.wind.speed = mph;\n      weatherObject.wind.unit = 'mph';\n      // Calculate the wind speed to mph\n      // update Object speed and unit to mph\n    } else {\n      const degC = (parseFloat(weatherObject.main.temp) - 32) * (5 / 9);\n      weatherObject.main.temp = degC;\n      weatherObject.main.unit = 'C';\n      // calculate C degress.\n      // update object temp to C degrees\n      // update object temp units to C unit\n      const kph = parseFloat(weatherObject.wind.speed) * 1.609;\n      weatherObject.wind.speed = kph;\n      weatherObject.wind.unit = 'km/h';\n      // Calculate the wind speed to kph\n      // update Object speed and unit to kph\n    }\n    return weatherObject.main.unit;\n  };\n\n\n  return {\n    getTimeStamp,\n    setDataReady,\n    clearDataReady,\n    getDataReady,\n    updateWeatherObject,\n    getWeatherObject,\n    initWeatherObject,\n    setEditingCity,\n    clearEditingCity,\n    getEditingCity,\n    toggleUnits,\n    updateCountryObject,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myCity);\n\n//# sourceURL=webpack:///./src/components/mycity.js?");

/***/ }),

/***/ "./src/components/openweather.js":
/*!***************************************!*\
  !*** ./src/components/openweather.js ***!
  \***************************************/
/*! exports provided: OpenWeatherMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpenWeatherMap\", function() { return OpenWeatherMap; });\n/* harmony import */ var _freegeoip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freegeoip */ \"./src/components/freegeoip.js\");\n\n\nconst OpenWeatherMap = (() => {\n  const loadMySessionWeather = async (userCity, units = 'metric') => {\n    const API_KEY = \"6810a7e34f2939f2cbca81e558486741\";\n\n    // const mySessionCity = await IpStack.getMyCity();\n    const mySessionCity = await _freegeoip__WEBPACK_IMPORTED_MODULE_0__[\"FreeGeoIp\"].getMyCity();\n\n    if (mySessionCity) {\n      try {\n        const cName = mySessionCity.city;\n        const cCcode = mySessionCity.country_code;\n        const lang = 'en';\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cName},${cCcode}&lang=${lang}&units=${units}&appid=${API_KEY}`;\n\n        const response = await fetch(url,\n          { mode: 'cors' });\n        const responseObject = await response.json();\n\n        userCity.updateWeatherObject(responseObject);\n        // Updates country name from IpStack response.\n        // OpenWeather APi does not provide country name.\n        userCity.updateCountryObject(mySessionCity.country_name);\n      } catch (err) {\n        throw ('Something went wrong with session weather :', err);\n      }\n    }\n  };\n\n  const loadMyCityWeather = async (city = 'london', units = 'metric', lang = 'en') => {\n    const API_KEY = \"6810a7e34f2939f2cbca81e558486741\";\n\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${API_KEY}`,\n      { mode: 'cors' });\n\n    const responseObject = await response.json();\n\n    return responseObject;\n  };\n  return {\n    loadMySessionWeather,\n    loadMyCityWeather,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenWeatherMap);\n\n//# sourceURL=webpack:///./src/components/openweather.js?");

/***/ }),

/***/ "./src/components/restcountries.js":
/*!*****************************************!*\
  !*** ./src/components/restcountries.js ***!
  \*****************************************/
/*! exports provided: RestCountries, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestCountries\", function() { return RestCountries; });\nconst RestCountries = (() => {\n  const getCountryName = async (cCode) => {\n    const url = `https://restcountries.eu/rest/v2/alpha/${cCode}`;\n\n    try {\n      const response = await fetch(url,\n        { mode: 'cors' });\n      const myCountryObject = await response.json();\n      return myCountryObject.nativeName;\n    } catch (err) {\n      throw ('Something went wrong with restCountries() :', err);\n    }\n  };\n  return {\n    getCountryName,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RestCountries);\n\n//# sourceURL=webpack:///./src/components/restcountries.js?");

/***/ }),

/***/ "./src/components/unsplash.js":
/*!************************************!*\
  !*** ./src/components/unsplash.js ***!
  \************************************/
/*! exports provided: UnsPlash, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UnsPlash\", function() { return UnsPlash; });\n\nconst UnsPlash = (() => {\n  async function loadImg(text = 'sunny clouds') {\n    let creditsInfo = {};\n    const API_KEY = \"kwHPLm7uuNSdNT1BHrYrKcI6FcCYZ3y5n0NGn4lRb9Y\";\n    const url = `https://api.unsplash.com/search/photos?query=${text}&orientation=portrait&per_page=20&client_id=${API_KEY}`;\n    const divTag = document.querySelector('.image');\n\n    try {\n      const unsplashResponse = await fetch(url);\n      const unsplashObject = await unsplashResponse.json();\n      const rndImageIndex = Math.floor(Math.random() * Math.floor(20));\n      if (unsplashObject.results[rndImageIndex].id !== '') {\n        const unsUrl = unsplashObject.results[rndImageIndex].urls.small;\n        creditsInfo = unsplashObject.results[rndImageIndex];\n        divTag.style.backgroundImage = `url(${unsUrl})`;\n      }\n    } catch (err) {\n      throw ('Something went wrong with Unsplash imaginary :', err);\n    }\n    return creditsInfo;\n  }\n\n  return {\n    loadImg,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnsPlash);\n\n//# sourceURL=webpack:///./src/components/unsplash.js?");

/***/ }),

/***/ "./src/fonts/futura/Futura_Heavy_font.ttf":
/*!************************************************!*\
  !*** ./src/fonts/futura/Futura_Heavy_font.ttf ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/af72c25a6945b0f48abb1412d1ef5829.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/futura/Futura_Heavy_font.ttf?");

/***/ }),

/***/ "./src/fonts/futura/futura_light_bt.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/futura/futura_light_bt.ttf ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/ead7282f8edac7904e5314afb63c4932.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/futura/futura_light_bt.ttf?");

/***/ }),

/***/ "./src/fonts/futura/futura_medium_bt.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/futura/futura_medium_bt.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/4e762c29ef7b44ca51cbe3fa14901444.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/futura/futura_medium_bt.ttf?");

/***/ }),

/***/ "./src/icons/cancel.svg":
/*!******************************!*\
  !*** ./src/icons/cancel.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/83a811fde63879b8a50c938ac97704c9.svg\");\n\n//# sourceURL=webpack:///./src/icons/cancel.svg?");

/***/ }),

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/6e7dbc616840a3d98cb216f3afe75f7f.svg\");\n\n//# sourceURL=webpack:///./src/icons/check.svg?");

/***/ }),

/***/ "./src/icons/cloudy.svg":
/*!******************************!*\
  !*** ./src/icons/cloudy.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/024a46cce6bf62103134472d7f0b8c00.svg\");\n\n//# sourceURL=webpack:///./src/icons/cloudy.svg?");

/***/ }),

/***/ "./src/icons/drop.svg":
/*!****************************!*\
  !*** ./src/icons/drop.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/7d2472af34021843f9826cfd317692b7.svg\");\n\n//# sourceURL=webpack:///./src/icons/drop.svg?");

/***/ }),

/***/ "./src/icons/part-cloud.svg":
/*!**********************************!*\
  !*** ./src/icons/part-cloud.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/96061670df7689bb5f78d59d12c9fe5e.svg\");\n\n//# sourceURL=webpack:///./src/icons/part-cloud.svg?");

/***/ }),

/***/ "./src/icons/showers.svg":
/*!*******************************!*\
  !*** ./src/icons/showers.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/75ce2d1a0669f92ae9c6fe18e1ba86d3.svg\");\n\n//# sourceURL=webpack:///./src/icons/showers.svg?");

/***/ }),

/***/ "./src/icons/snowy.svg":
/*!*****************************!*\
  !*** ./src/icons/snowy.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/6833226b6d42d58c572a9e303e6f55c7.svg\");\n\n//# sourceURL=webpack:///./src/icons/snowy.svg?");

/***/ }),

/***/ "./src/icons/stormy.svg":
/*!******************************!*\
  !*** ./src/icons/stormy.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/2f593042514e4ccfd4797b3bfacbf2bb.svg\");\n\n//# sourceURL=webpack:///./src/icons/stormy.svg?");

/***/ }),

/***/ "./src/icons/sunny.svg":
/*!*****************************!*\
  !*** ./src/icons/sunny.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/1b14915e0b233877b50d2aeeae6d9209.svg\");\n\n//# sourceURL=webpack:///./src/icons/sunny.svg?");

/***/ }),

/***/ "./src/icons/system_switch-C.svg":
/*!***************************************!*\
  !*** ./src/icons/system_switch-C.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/b627408f3ca49f24c47c8f0c75976e2c.svg\");\n\n//# sourceURL=webpack:///./src/icons/system_switch-C.svg?");

/***/ }),

/***/ "./src/icons/system_switch-F.svg":
/*!***************************************!*\
  !*** ./src/icons/system_switch-F.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/32c479ef6b5870d3df5c196128c8fb1e.svg\");\n\n//# sourceURL=webpack:///./src/icons/system_switch-F.svg?");

/***/ }),

/***/ "./src/icons/wind_arrow.svg":
/*!**********************************!*\
  !*** ./src/icons/wind_arrow.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/8a13b7ced487bf58ab6f7d49d109f2c4.svg\");\n\n//# sourceURL=webpack:///./src/icons/wind_arrow.svg?");

/***/ }),

/***/ "./src/images/bar-arrow-01.svg":
/*!*************************************!*\
  !*** ./src/images/bar-arrow-01.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/9e7a56e46573739328cd40b71e724f9d.svg\");\n\n//# sourceURL=webpack:///./src/images/bar-arrow-01.svg?");

/***/ }),

/***/ "./src/images/barom_scale.svg":
/*!************************************!*\
  !*** ./src/images/barom_scale.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/cbf07250a577b30eb49435664ab66cb9.svg\");\n\n//# sourceURL=webpack:///./src/images/barom_scale.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_applogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/applogic */ \"./src/components/applogic.js\");\n/* harmony import */ var _components_mycity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mycity */ \"./src/components/mycity.js\");\n\n\n\n\n\n\nconst userCity = Object(_components_mycity__WEBPACK_IMPORTED_MODULE_2__[\"myCity\"])();\nuserCity.initWeatherObject();\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  _components_applogic__WEBPACK_IMPORTED_MODULE_1__[\"AppLogic\"].initSessionWeather(userCity);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });