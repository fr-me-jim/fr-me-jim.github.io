webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Value.js":
/*!*****************************!*\
  !*** ./components/Value.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/components/Value.js";


var Value = function Value(props) {
  //get data
  console.log(props);
  var _props$value = props.value,
      price = _props$value.price,
      percent_change_1h = _props$value.percent_change_1h,
      percent_change_7d = _props$value.percent_change_7d,
      percent_change_24h = _props$value.percent_change_24h;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-white bg-info mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Bitcoin Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Current Value: ", price)));
};

/* harmony default export */ __webpack_exports__["default"] = (Value);

/***/ })

})
//# sourceMappingURL=index.js.1e8fc9addbf2042d1433.hot-update.js.map