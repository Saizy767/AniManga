"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Main/Main_Home/Main_home.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Main/Main_Home/Main_home.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Card/Card */ \"./src/components/Main/Card/Card.tsx\");\n/* harmony import */ var _Main_home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main_home.module.scss */ \"./src/components/Main/Main_Home/Main_home.module.scss\");\n/* harmony import */ var _Main_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Main_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      TopManga = _useState2[0],\n      SetTopManga = _useState2[1];\n\n  var GetTopManga = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n      var temp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('https://api.jikan.moe/v3/top/manga').then(function (res) {\n                return res.json();\n              });\n\n            case 2:\n              temp = _context.sent;\n              SetTopManga(temp.top.slice(0, 5));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function GetTopManga() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    GetTopManga();\n  }, []);\n  console.log(TopManga);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"main\", {\n    className: (_Main_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main_background)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"div\", {\n    style: {\n      width: '100%',\n      height: '20%',\n      position: 'relative'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"div\", {\n    className: (_Main_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main__Daily_updates)\n  }, TopManga.map(function (el) {\n    {\n      el.authors;\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: el.mal_id\n    }, el));\n  })));\n};\n\n_s(Main, \"hW3juNBh5OeE7R/Yk9+21un7frQ=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL01haW5fSG9tZS9NYWluX2hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUssSUFBUSxHQUFHLFNBQVhBLElBQVcsR0FBSztBQUFBOztBQVlsQixrQkFBZ0NILCtDQUFRLENBQWUsRUFBZixDQUF4QztBQUFBO0FBQUEsTUFBT0ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxXQUFXO0FBQUEsd0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUMsS0FBSyxDQUFDLG9DQUFELENBQUwsQ0FDbkJDLElBRG1CLENBQ2QsVUFBQUMsR0FBRztBQUFBLHVCQUFHQSxHQUFHLENBQUNDLElBQUosRUFBSDtBQUFBLGVBRFcsQ0FEUjs7QUFBQTtBQUNWQyxjQUFBQSxJQURVO0FBR1pOLGNBQUFBLFdBQVcsQ0FBQ00sSUFBSSxDQUFDQyxHQUFMLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLENBQUQsQ0FBWDs7QUFIWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYUCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQUtBUCxFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVk8sSUFBQUEsV0FBVztBQUNkLEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFHQVEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVo7QUFFQSxzQkFDSTtBQUFNLGFBQVMsRUFBRUYsK0VBQXNCYztBQUF2QyxrQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUMsTUFBUDtBQUFlQyxNQUFBQSxNQUFNLEVBQUMsS0FBdEI7QUFBNkJDLE1BQUFBLFFBQVEsRUFBQztBQUF0QztBQUFaLElBREosZUFFSTtBQUFLLGFBQVMsRUFBRWpCLG1GQUEwQmtCO0FBQTFDLEtBRUloQixRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQ0MsRUFBRCxFQUFNO0FBQ2Y7QUFBQ0EsTUFBQUEsRUFBRSxDQUFDQyxPQUFIO0FBQVc7QUFDWix3QkFBTywyREFBQyxrREFBRDtBQUFNLFNBQUcsRUFBRUQsRUFBRSxDQUFDRTtBQUFkLE9BQ1NGLEVBRFQsRUFBUDtBQUdILEdBTEQsQ0FGSixDQUZKLENBREo7QUFjSCxDQXRDRDs7R0FBTW5COztLQUFBQTtBQXVDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluL01haW5fSG9tZS9NYWluX2hvbWUudHN4P2YzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZC9DYXJkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5faG9tZS5tb2R1bGUuc2NzcydcblxuY29uc3QgTWFpbjogRkMgPSAoKSA9PntcbiAgICBcbiAgICBpbnRlcmZhY2UgTWFuZ2F7XG4gICAgICAgIG1hbF9pZDpudW1iZXIsXG4gICAgICAgIHNjb3JlOm51bWJlcixcbiAgICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICBpbWFnZV91cmw6IHN0cmluZyxcbiAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgIGF1dGhvcnM6b2JqZWN0LFxuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgW1RvcE1hbmdhLCBTZXRUb3BNYW5nYV0gPSB1c2VTdGF0ZTxBcnJheTxNYW5nYT4+KFtdKVxuXG4gICAgY29uc3QgR2V0VG9wTWFuZ2EgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc3QgdGVtcDogYW55ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvbWFuZ2EnKVxuICAgICAgICAgICAgLnRoZW4ocmVzPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIFNldFRvcE1hbmdhKHRlbXAudG9wLnNsaWNlKDAsNSkpfVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEdldFRvcE1hbmdhKClcbiAgICB9LFtdKVxuICAgIGNvbnNvbGUubG9nKFRvcE1hbmdhKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9iYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMjAlJywgcG9zaXRpb246J3JlbGF0aXZlJ319PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19EYWlseV91cGRhdGVzfT5cbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIFRvcE1hbmdhLm1hcCgoZWwpPT57XG4gICAgICAgICAgICAgICAgICAgIHtlbC5hdXRob3JzfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtlbC5tYWxfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIk1haW4iLCJUb3BNYW5nYSIsIlNldFRvcE1hbmdhIiwiR2V0VG9wTWFuZ2EiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGVtcCIsInRvcCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIm1haW5fYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJtYWluX19EYWlseV91cGRhdGVzIiwibWFwIiwiZWwiLCJhdXRob3JzIiwibWFsX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main/Main_Home/Main_home.tsx\n");

/***/ })

});