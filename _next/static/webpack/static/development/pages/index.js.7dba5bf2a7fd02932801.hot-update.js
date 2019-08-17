webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var _components_Value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Value */ "./components/Value.js");
/* harmony import */ var _components_NewsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NewsList */ "./components/NewsList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/fran/Documentos/React_learning/bitcoin_portal/pages/index.js";






var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Bitcoin Value"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Value__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: props.bitcoinValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Bitcoin News"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    news: props.bitcoinNews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Future Bitcoin Events")), console.log(props)));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var urlValue, urlNews, reqOptions, responseValue, responseNews;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          urlValue = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC";
          urlNews = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-16&sortBy=publishedAt&apiKey=323c894f6d7443dea2613c06482e22e3&language=en";
          reqOptions = {
            headers: {
              "X-CMC_PRO_API_KEY": "b181ee87-a790-4eae-871b-64ce761b21b9",
              "Accept-Encoding": "deflate"
            },
            json: true,
            gzip: true
          };
          _context.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(urlValue, reqOptions);

        case 5:
          responseValue = _context.sent;
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(urlNews);

        case 8:
          responseNews = _context.sent;
          return _context.abrupt("return", {
            bitcoinValue: responseValue.data.data.BTC.quote.USD,
            bitcoinNews: responseNews.data.articles
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7dba5bf2a7fd02932801.hot-update.js.map