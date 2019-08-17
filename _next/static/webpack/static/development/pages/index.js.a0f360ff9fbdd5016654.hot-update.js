webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewsList.js":
/*!********************************!*\
  !*** ./components/NewsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ "./components/News.js");
var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/components/NewsList.js";



var NewsList = function NewsList(_ref) {
  var newsList = _ref.newsList;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, newsList.map(function (news) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: news.url,
      news: news,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsList);

/***/ })

})
//# sourceMappingURL=index.js.a0f360ff9fbdd5016654.hot-update.js.map