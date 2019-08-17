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

  var renderDefaultImg = function renderDefaultImg(e) {
    e.preventDefault();
    e.target.src = 'http://pathobiologyresearch.com/wp-content/uploads/News.jpg';
  };

  var image = '';
  if (urlToImage !== '') image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: urlToImage,
    alt: title,
    onError: renderDefaultImg,
    className: "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });else image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://pathobiologyresearch.com/wp-content/uploads/News.jpg",
    alt: title,
    className: "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, image), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, source.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-success d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "More"))));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.e5b8fd4f11e11225e07b.hot-update.js.map