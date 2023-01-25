/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const btnDark = document.querySelector(\".dark__btn\");\r\n\r\n// Проверка на наличие тёмной темы на уровне системных настроек\r\n\r\nif (window.matchMedia && window.matchMedia(\"(preferse-color-scheme: dark)\").matches) {\r\n    btnDark.classList.add('dark__btn--active');\r\n    document.body.classList.add('dark');\r\n}\r\n\r\n// Проверка на наличие тёмной темы LocalStorage\r\n\r\nif (localStorage.getItem('darkMode') === 'dark') {\r\n    btnDark.classList.add('dark__btn--active');\r\n    document.body.classList.add('dark');\r\n} else if (localStorage.getItem('darkMode') === 'light') {\r\n    btnDark.classList.remove('dark__btn--active');\r\n    document.body.classList.remove('dark');\r\n}\r\n\r\n// Смена цветовой схемы при смене системных настроек\r\n\r\nwindow.matchMedia(\"(preferse-color-scheme: dark)\").addEventListener('change', (event) => {\r\n    const newColorScheme = event.matches ? \"dark\" : \"light\";\r\n\r\n    if (newColorScheme === \"dark\") {\r\n        btnDark.classList.add('dark__btn--active');\r\n        document.body.classList.add('dark');\r\n        localStorage.setItem('darkMode', 'dark')\r\n    } else {\r\n        btnDark.classList.remove('dark__btn--active');\r\n        document.body.classList.remove('dark');\r\n        localStorage.setItem('darkMode', 'light')\r\n    }\r\n})\r\n\r\n// Смена цветовой схемы по кнопке\r\nbtnDark.onclick = () => {\r\n    btnDark.classList.toggle(\"dark__btn--active\");\r\n    const isDark = document.querySelector(\"body\").classList.toggle(\"dark\");\r\n\r\n    if (isDark) {\r\n        localStorage.setItem('darkMode', 'dark')\r\n    } else {\r\n        localStorage.setItem('darkMode', 'light')\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;