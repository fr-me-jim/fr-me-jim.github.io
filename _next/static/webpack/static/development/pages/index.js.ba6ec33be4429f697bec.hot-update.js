webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/components/News.js";


var News = function News(_ref) {
  var news = _ref.news;
  //get datas
  var urlToImage = news.urlToImage,
      url = news.url,
      title = news.title,
      description = news.description,
      source = news.source;
  var image = '';
  if (urlToImage !== '') image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: urlToImage,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.ba6ec33be4429f697bec.hot-update.js.map