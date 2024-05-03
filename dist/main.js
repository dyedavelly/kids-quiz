/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/modal.js */ \"./src/scripts/modal.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const openModalButton = document.getElementById('aboutButton');\n  const closeModalButton = document.getElementById('closeButton');\n  const overlay = document.getElementById('overlay');\n  openModalButton.addEventListener('click', () => {\n    const modal = document.getElementById('aboutModal');\n    debugger;\n    _scripts_modal_js__WEBPACK_IMPORTED_MODULE_0__.openModal(modal);\n  });\n  closeModalButton.addEventListener('click', () => {\n    const modal = document.getElementById('aboutModal');\n    _scripts_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal(modal);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUQ7QUFFakRDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSztFQUMvQyxNQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUM5RCxNQUFNQyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQy9ELE1BQU1FLE9BQU8sR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsU0FBUyxDQUFDO0VBRWxERCxlQUFlLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQzVDLE1BQU1LLEtBQUssR0FBR04sUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ25EO0lBQ0FKLHdEQUFvQixDQUFDTyxLQUFLLENBQUM7RUFDL0IsQ0FBQyxDQUFDO0VBRUZGLGdCQUFnQixDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUM3QyxNQUFNSyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNuREoseURBQXFCLENBQUNPLEtBQUssQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWRzLXF1aXotYXBwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWJvdXRNb2RhbCBmcm9tICcuL3NjcmlwdHMvbW9kYWwuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0QnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIFxuICAgIG9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRNb2RhbCcpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBhYm91dE1vZGFsLm9wZW5Nb2RhbChtb2RhbCk7XG4gICAgfSk7XG4gICAgXG4gICAgY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRNb2RhbCcpO1xuICAgICAgICBhYm91dE1vZGFsLmNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiYWJvdXRNb2RhbCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5Nb2RhbEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiY2xvc2VNb2RhbEJ1dHRvbiIsIm92ZXJsYXkiLCJtb2RhbCIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: function() { return /* binding */ closeModal; },\n/* harmony export */   openModal: function() { return /* binding */ openModal; }\n/* harmony export */ });\nfunction openModal(modal) {\n  if (modal === null) return;\n  modal.classList.add('active');\n}\nfunction closeModal(modal) {\n  if (modal === null) return;\n  modal.classList.remove('active');\n}\n\n//export default {openModal, closeModal}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNPLFNBQVNBLFNBQVNBLENBQUNDLEtBQUssRUFBRTtFQUM3QixJQUFHQSxLQUFLLEtBQUssSUFBSSxFQUFFO0VBQ25CQSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNqQztBQUVPLFNBQVNDLFVBQVVBLENBQUNILEtBQUssRUFBRTtFQUM5QixJQUFHQSxLQUFLLEtBQUssSUFBSSxFQUFFO0VBQ25CQSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNwQzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpZHMtcXVpei1hcHAvLi9zcmMvc2NyaXB0cy9tb2RhbC5qcz9hMGVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmKG1vZGFsID09PSBudWxsKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICBpZihtb2RhbCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQge29wZW5Nb2RhbCwgY2xvc2VNb2RhbH0iXSwibmFtZXMiOlsib3Blbk1vZGFsIiwibW9kYWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZU1vZGFsIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modal.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWRzLXF1aXotYXBwLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;