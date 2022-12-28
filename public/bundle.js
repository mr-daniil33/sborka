/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"division\": () => (/* binding */ division),\n/* harmony export */   \"exponentiation\": () => (/* binding */ exponentiation),\n/* harmony export */   \"first_argument\": () => (/* binding */ first_argument),\n/* harmony export */   \"hypotenuse\": () => (/* binding */ hypotenuse),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"second_argument\": () => (/* binding */ second_argument),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\nfunction sum(a, b) {\n  // вычисление суммы\n  return a + b;\n}\nfunction sub(a, b) {\n  // вычисление разности\n  return a - b;\n}\nfunction multiply(a, b) {\n  // вычисление произведения\n  return a * b;\n}\nfunction division(a, b) {\n  // вычисление деления\n  return a / b;\n}\nfunction exponentiation(a, b) {\n  // вычисление возведения в степень\n  return Math.pow(a, b);\n}\nfunction hypotenuse(a, b) {\n  // вычисление гипотенузы\n  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));\n}\nfunction first_argument(a, b) {\n  // вычисление величины угла при 1-м арг-те\n  return 180 / Math.PI * Math.atan(a / b);\n}\nfunction second_argument(a, b) {\n  // вычисление величины угла при 2-м арг-те\n  return 180 - 90 - 180 / Math.PI * Math.atan(a / b);\n}\n\n\n//# sourceURL=webpack://js-sborka/./src/calc.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\nvar button_sum = document.getElementById('button-sum');\nvar button_sub = document.getElementById('button-sub');\nvar button_mul = document.getElementById('button-mul');\nvar button_div = document.getElementById('button-div');\nvar button_exp = document.getElementById('button-exp');\nvar button_hyp = document.getElementById('button-hyp');\n\nbutton_sum.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.sum)(a, b));\n});\nbutton_sub.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.sub)(a, b));\n});\nbutton_mul.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.multiply)(a, b));\n});\nbutton_div.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.division)(a, b));\n});\nbutton_exp.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.exponentiation)(a, b));\n});\nbutton_hyp.addEventListener('click', function () {\n  var a = +prompt(\"Введите первое число\", \"\");\n  var b = +prompt(\"Введите второе число\", \"\");\n  alert((0,_calc__WEBPACK_IMPORTED_MODULE_0__.hypotenuse)(a, b));\n});\n\n//# sourceURL=webpack://js-sborka/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;