webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/components/Event.js";


var Event = function Event(_ref) {
  var event = _ref.event;
  //get data
  var name = event.name,
      url = event.url,
      description = event.description;
  var desc = description.text;
  if (desc) desc.substr(0, 250);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "list-group-item active mb-1 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, name.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, description.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=index.js.289f6103db1e99b57aac.hot-update.js.map