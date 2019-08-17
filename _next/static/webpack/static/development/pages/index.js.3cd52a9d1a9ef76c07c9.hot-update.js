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
  var image = ''; // if( urlToImage !== '' )
  //     image = <img src={urlToImage} alt={title} className="card-img-top" />;
  // else

  image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://pathobiologyresearch.com/wp-content/uploads/News.jpg",
    alt: title,
    className: "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, image)));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.3cd52a9d1a9ef76c07c9.hot-update.js.map