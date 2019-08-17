webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Events.js":
/*!******************************!*\
  !*** ./components/Events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event */ "./components/Event.js");

var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/components/Events.js";



var Events = function Events(_ref) {
  var events = _ref.events;

  var eventsId = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(events);

  console.log(eventsId);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, events.map(function (event) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: event.id,
      event: event,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=index.js.dcacb6edecd8c9c1976d.hot-update.js.map