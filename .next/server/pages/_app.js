/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQyx5QkFBeUIsU0FBUyx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYW5nYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzP2Q5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_rootReducer_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/rootReducer/rootReducer */ \"./src/redux/rootReducer/rootReducer.ts\");\n/* harmony import */ var _styles_global_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.global.scss */ \"./src/styles/global.global.scss\");\n/* harmony import */ var _styles_global_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_global_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_rootReducer_rootReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()))));\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTU8sS0FBSyxHQUFHSCxrREFBVyxDQUFDRSxzRUFBRCxFQUFhSCw4Q0FBTyxDQUFDRCxzREFBZSxDQUFDRyxvREFBRCxDQUFoQixDQUFwQixDQUF6QjtBQUVlLFNBQVNHLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3RELHNCQUNJLDJEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFSDtBQUFqQixrQkFDRSwyREFBQyxTQUFELEVBQWVHLFNBQWYsQ0FERixDQURKO0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYW5nYS8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5cbmltcG9ydCByb290UmVkdXNlciBmcm9tICcuLi9yZWR1eC9yb290UmVkdWNlci9yb290UmVkdWNlcidcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmdsb2JhbC5zY3NzJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1c2VyLGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJjcmVhdGVTdG9yZSIsInRodW5rIiwicm9vdFJlZHVzZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/redux/reducer/SidepanelChangeReducer.ts":
/*!*****************************************************!*\
  !*** ./src/redux/reducer/SidepanelChangeReducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidepanelChangeReducer\": () => (/* binding */ sidepanelChangeReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ \"./src/redux/types/types.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  activity: false\n};\nvar sidepanelChangeReducer = function sidepanelChangeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_types__WEBPACK_IMPORTED_MODULE_1__.CHANGER_SIDEPANEL_STATE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        activity: !state.activity\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9TaWRlcGFuZWxDaGFuZ2VSZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BLElBQU1DLFlBQTRCLEdBQUc7QUFDakNDLEVBQUFBLFFBQVEsRUFBRTtBQUR1QixDQUFyQztBQVFPLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBc0U7QUFBQSxNQUFyRUMsS0FBcUUsdUVBQTdESCxZQUE2RDtBQUFBLE1BQS9DSSxNQUErQzs7QUFDeEcsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS04saUVBQUw7QUFDSSw2Q0FBV0ksS0FBWDtBQUFrQkYsUUFBQUEsUUFBUSxFQUFFLENBQUVFLEtBQUssQ0FBQ0Y7QUFBcEM7O0FBQ0o7QUFDSSxhQUFPRSxLQUFQO0FBSlI7QUFNSCxDQVBNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFuZ2EvLi9zcmMvcmVkdXgvcmVkdWNlci9TaWRlcGFuZWxDaGFuZ2VSZWR1Y2VyLnRzPzE1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0hBTkdFUl9TSURFUEFORUxfU1RBVEUgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIHNpZGVQYW5lbFN0YXRle1xuICAgIGFjdGl2aXR5OiBib29sZWFuXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogc2lkZVBhbmVsU3RhdGUgPSB7XG4gICAgYWN0aXZpdHk6IGZhbHNlLFxufVxuXG5pbnRlcmZhY2UgQ2hhbmdlU2lkZXBhbmVsU3RhdGV7XG4gICAgdHlwZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBzaWRlcGFuZWxDaGFuZ2VSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246Q2hhbmdlU2lkZXBhbmVsU3RhdGUpIDogc2lkZVBhbmVsU3RhdGU9PntcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIENIQU5HRVJfU0lERVBBTkVMX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYWN0aXZpdHk6ICEoc3RhdGUuYWN0aXZpdHkpfSBcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNIQU5HRVJfU0lERVBBTkVMX1NUQVRFIiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZpdHkiLCJzaWRlcGFuZWxDaGFuZ2VSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducer/SidepanelChangeReducer.ts\n");

/***/ }),

/***/ "./src/redux/rootReducer/rootReducer.ts":
/*!**********************************************!*\
  !*** ./src/redux/rootReducer/rootReducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reducer_SidepanelChangeReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../reducer/SidepanelChangeReducer */ \"./src/redux/reducer/SidepanelChangeReducer.ts\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n  sidepanel: _reducer_SidepanelChangeReducer__WEBPACK_IMPORTED_MODULE_0__.sidepanelChangeReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcm9vdFJlZHVjZXIvcm9vdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNRSxXQUFXLEdBQUdELHNEQUFlLENBQUM7QUFDaENFLEVBQUFBLFNBQVMsRUFBRUgsbUZBQXNCQTtBQURELENBQUQsQ0FBbkM7QUFNQSxpRUFBZUUsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hbmdhLy4vc3JjL3JlZHV4L3Jvb3RSZWR1Y2VyL3Jvb3RSZWR1Y2VyLnRzP2Y3NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lkZXBhbmVsQ2hhbmdlUmVkdWNlciB9IGZyb20gJy4vLi4vcmVkdWNlci9TaWRlcGFuZWxDaGFuZ2VSZWR1Y2VyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBzaWRlcGFuZWw6IHNpZGVwYW5lbENoYW5nZVJlZHVjZXIsXG59KVxuXG5leHBvcnQgdHlwZSByb290UmVkdWNlclR5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIl0sIm5hbWVzIjpbInNpZGVwYW5lbENoYW5nZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsInNpZGVwYW5lbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/rootReducer/rootReducer.ts\n");

/***/ }),

/***/ "./src/redux/types/types.ts":
/*!**********************************!*\
  !*** ./src/redux/types/types.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHANGER_SIDEPANEL_STATE\": () => (/* binding */ CHANGER_SIDEPANEL_STATE)\n/* harmony export */ });\nvar CHANGER_SIDEPANEL_STATE = 'CHANGER_SIDEPANEL_STATE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvdHlwZXMvdHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLHVCQUErQixHQUFHLHlCQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hbmdhLy4vc3JjL3JlZHV4L3R5cGVzL3R5cGVzLnRzPzhmZjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENIQU5HRVJfU0lERVBBTkVMX1NUQVRFOiBzdHJpbmcgPSAnQ0hBTkdFUl9TSURFUEFORUxfU1RBVEUnIl0sIm5hbWVzIjpbIkNIQU5HRVJfU0lERVBBTkVMX1NUQVRFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/types/types.ts\n");

/***/ }),

/***/ "./src/styles/global.global.scss":
/*!***************************************!*\
  !*** ./src/styles/global.global.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();