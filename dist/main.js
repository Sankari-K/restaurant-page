/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hero-image.png */ "./src/assets/hero-image.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Quicksand:wght@300;400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-col: #CBB298;\n    --text-col: #565E46;\n    --text-col-light: #6E2205;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    color: var(--text-col);\n    font-family: 'Cormorant Garamond', serif;\n    font-family: 'Quicksand', sans-serif;\n}\n\na {\n    text-decoration: none;\n}\naddress > div > img, footer > img{\n    height: 15px;\n    width: 15px;\n    filter: invert(37%) sepia(3%) saturate(3254%) hue-rotate(38deg) brightness(91%) contrast(90%);\n}\n\n.navigation img {\n    height: 50px;\n}\n\naddress, footer {\n    padding: 12px;\n    font-size: 0.9rem;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    background-color: var(--background-col);\n}\n\naddress > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\ndiv.navigation, .about-text span, .menu-text span, .contact-text > span {\n    font-size: 25px;\n    color: var(--text-col);\n    font-weight: 600;\n}\n\n.navigation {\n    font-size: 25px;\n    padding: 8px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.navigation span {\n    padding: 15px;\n}\n\n.navigation span:hover {\n    color: var(--background-col);\n    cursor: pointer;\n}\n\n.slider {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv#content {\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n    height: 100vh;\n}\n\nbody {\n    height: 100vh;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n}\n\nfooter > img {\n    height: 20px;\n    width: 20px;\n}\n\n.slider p, .slider span{\n    font-size: 2rem;\n    text-align: center;\n    font-weight: 900;\n    color: white;\n}\n\n.slider p {\n    font-size: 8rem;\n}\n\n.about, .menu, .contact {\n    padding: 50px calc(100px + 10vw) 30px; /* check! */\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.about .socials, .menu .socials, .contact .socials {\n    margin-top: 15px; \n    display: flex;\n    gap: 10px;\n}\n\n.menu .socials {\n    margin-top: 35px;\n}\n\n.about .socials img, .menu .socials img, .contact .socials img {\n    height: 30px;\n}\n\n.about-text, .menu-text, .contact-text {\n    background-color: var(--background-col);\n    border-radius: 15px;\n    padding: 30px;\n}\n\n.about-text span {\n    padding-bottom: 20px;\n}\n\n.about-text p {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\nhr {\n    margin-top: 10px;\n    border: 0;\n    height: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.menu-text div {\n    padding: 20px 100px;\n}\n\n.menu-text > div > span {\n    font-size: 20px;\n}\n\n.menu-text {\n    border: 2px solid;\n    outline: 16px solid var(--background-col);\n}\n\n.contact-text p {\n    padding: 20px;\n    font-size: larger;\n}\n\n.contact-text .required {\n    color: red;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nform div {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n}\n\n.contact #message {\n    /* line-height:normal; */\n    height: 70px;\n    vertical-align:text-top;  \n\n}\n\ninput, textarea {\n    width: 300px;\n    height: 30px;\n    border-radius: 4px;\n    border: none;\n    padding: 2px; \n    resize: none;\n}\n\ninput:focus, textarea:focus {\n    outline: none;\n    border: 2px solid var(--text-col);\n}\n\ninput:valid, textarea:valid {\n    background-color: #98cbb2;\n}\n\ninput:invalid, textarea:invalid {\n    background-color: #cb9998; \n}\n\nbutton {\n    padding: 10px;\n    font-size: larger;\n    border: 2px solid var(--text-col);\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:after {\n    content: \" >>>\";\n}\n  \nbutton:hover,\nbutton:focus {\n    outline: none;\n    background: var(--text-col);\n    color: #fff;\n}\n\n.focus {\n    text-decoration-color: var(--background-col);\n    text-decoration: underline;\n    text-underline-offset: 0.25em;\n    border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,wCAAwC;IACxC,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,WAAW;IACX,6FAA6F;AACjG;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,iFAAsE;IACtE,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qCAAqC,EAAE,WAAW;IAClD,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uCAAuC;IACvC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,SAAS;IACT,wCAAwC;IACxC,2CAA2C;AAC/C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,4CAA4C;IAC5C,0BAA0B;IAC1B,6BAA6B;IAC7B,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Quicksand:wght@300;400;500;600&display=swap');\n\n:root {\n    --background-col: #CBB298;\n    --text-col: #565E46;\n    --text-col-light: #6E2205;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    color: var(--text-col);\n    font-family: 'Cormorant Garamond', serif;\n    font-family: 'Quicksand', sans-serif;\n}\n\na {\n    text-decoration: none;\n}\naddress > div > img, footer > img{\n    height: 15px;\n    width: 15px;\n    filter: invert(37%) sepia(3%) saturate(3254%) hue-rotate(38deg) brightness(91%) contrast(90%);\n}\n\n.navigation img {\n    height: 50px;\n}\n\naddress, footer {\n    padding: 12px;\n    font-size: 0.9rem;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    background-color: var(--background-col);\n}\n\naddress > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\ndiv.navigation, .about-text span, .menu-text span, .contact-text > span {\n    font-size: 25px;\n    color: var(--text-col);\n    font-weight: 600;\n}\n\n.navigation {\n    font-size: 25px;\n    padding: 8px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.navigation span {\n    padding: 15px;\n}\n\n.navigation span:hover {\n    color: var(--background-col);\n    cursor: pointer;\n}\n\n.slider {\n    background: url(./assets/hero-image.png) no-repeat center center fixed;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv#content {\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n    height: 100vh;\n}\n\nbody {\n    height: 100vh;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n}\n\nfooter > img {\n    height: 20px;\n    width: 20px;\n}\n\n.slider p, .slider span{\n    font-size: 2rem;\n    text-align: center;\n    font-weight: 900;\n    color: white;\n}\n\n.slider p {\n    font-size: 8rem;\n}\n\n.about, .menu, .contact {\n    padding: 50px calc(100px + 10vw) 30px; /* check! */\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.about .socials, .menu .socials, .contact .socials {\n    margin-top: 15px; \n    display: flex;\n    gap: 10px;\n}\n\n.menu .socials {\n    margin-top: 35px;\n}\n\n.about .socials img, .menu .socials img, .contact .socials img {\n    height: 30px;\n}\n\n.about-text, .menu-text, .contact-text {\n    background-color: var(--background-col);\n    border-radius: 15px;\n    padding: 30px;\n}\n\n.about-text span {\n    padding-bottom: 20px;\n}\n\n.about-text p {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\nhr {\n    margin-top: 10px;\n    border: 0;\n    height: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.menu-text div {\n    padding: 20px 100px;\n}\n\n.menu-text > div > span {\n    font-size: 20px;\n}\n\n.menu-text {\n    border: 2px solid;\n    outline: 16px solid var(--background-col);\n}\n\n.contact-text p {\n    padding: 20px;\n    font-size: larger;\n}\n\n.contact-text .required {\n    color: red;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nform div {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n}\n\n.contact #message {\n    /* line-height:normal; */\n    height: 70px;\n    vertical-align:text-top;  \n\n}\n\ninput, textarea {\n    width: 300px;\n    height: 30px;\n    border-radius: 4px;\n    border: none;\n    padding: 2px; \n    resize: none;\n}\n\ninput:focus, textarea:focus {\n    outline: none;\n    border: 2px solid var(--text-col);\n}\n\ninput:valid, textarea:valid {\n    background-color: #98cbb2;\n}\n\ninput:invalid, textarea:invalid {\n    background-color: #cb9998; \n}\n\nbutton {\n    padding: 10px;\n    font-size: larger;\n    border: 2px solid var(--text-col);\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:after {\n    content: \" >>>\";\n}\n  \nbutton:hover,\nbutton:focus {\n    outline: none;\n    background: var(--text-col);\n    color: #fff;\n}\n\n.focus {\n    text-decoration-color: var(--background-col);\n    text-decoration: underline;\n    text-underline-offset: 0.25em;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about-content/about-content.js":
/*!****************************************************!*\
  !*** ./src/modules/about-content/about-content.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutContent": () => (/* binding */ createAboutContent)
/* harmony export */ });
/* harmony import */ var _page_elements_socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-elements/socials */ "./src/modules/page-elements/socials.js");


const createAboutContent = (() => {
    const createAboutText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'about-text');

        const spanText = document.createElement('span');
        spanText.textContent = 'Who we are';

        const horizontalLine = document.createElement('hr');

        const paraOne = document.createElement('p');
        paraOne.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In eros nibh, finibus eu viverra id, mattis ac quam. 
        Maecenas sit amet rutrum leo. Cras condimentum efficitur 
        ligula, eu rutrum ipsum iaculis at. Phasellus lacus tortor, 
        hendrerit sodales magna vestibulum, interdum ultrices est.
        Proin quis mauris a orci blandit aliquet. Donec eu egestas 
        neque, at cursus mauris.`;

        const paraTwo = document.createElement('p');
        paraTwo.textContent = `Aliquam et nulla lectus. Orci varius natoque penatibus et 
        magnis dis parturient montes, nascetur ridiculus mus. 
        Curabitur nec augue ac odio scelerisque egestas eu at elit.
        Vestibulum dolor tellus, luctus eget condimentum sit amet, 
        tincidunt id libero. Donec vitae tempor ante. Interdum et 
        malesuada fames ac ante ipsum primis in faucibus.
        Aliquam et nulla lectus. Orci varius natoque penatibus et 
        magnis dis parturient montes, nascetur ridiculus mus.`;

        container.append(
            spanText,
            horizontalLine,
            paraOne,
            paraTwo
        );
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'about');

    container.append(
        createAboutText(),
        (0,_page_elements_socials__WEBPACK_IMPORTED_MODULE_0__.createSocials)()
    )
    return container;
});



/***/ }),

/***/ "./src/modules/contact-content/contact-content.js":
/*!********************************************************!*\
  !*** ./src/modules/contact-content/contact-content.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactContent": () => (/* binding */ createContactContent)
/* harmony export */ });
/* harmony import */ var _page_elements_socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-elements/socials */ "./src/modules/page-elements/socials.js");



const createContactContent = (() => {
    const createInput = (forInfo, type) => {
        const container = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', forInfo);
        label.textContent = forInfo[0].toUpperCase() + forInfo.slice(1);
        const required = document.createElement('span');
        required.setAttribute('class', 'required');
        required.textContent = '*';
        label.appendChild(required);

        const input = document.createElement('input');
        input.type = type;
        input.id = forInfo;
        input.required = true;

        container.append(
            label,
            input
        );
        return container;
    }

    const createForm = () => {
        const form = document.createElement('form');
        form.name = "form";
        form.action = "./index.html";

        const textarea = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', 'message');
        label.textContent = 'Message';

        const required = document.createElement('span');
        required.setAttribute('class', 'required');
        required.textContent = '*';
        label.appendChild(required);

        const inputField = document.createElement('textarea');
        inputField.name = 'message';
        inputField.id = 'message';
        inputField.minLength = '5';
        inputField.required = true;

        textarea.append(
            label,
            inputField
        );

        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';

        form.append(
            createInput('name', 'text'),
            createInput('email', 'email'),
            textarea,
            button
        );
        return form;
    }

    const createContactText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'contact-text');

        const heading = document.createElement('span');
        heading.textContent = 'Contact us!';

        const horizontalLine = document.createElement('hr');
        const subheading = document.createElement('p');
        subheading.textContent = 'Please fill this form and we\'ll get in touch with you soon.';

        container.append(
            heading,
            horizontalLine,
            subheading,
            createForm()
        );
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'contact');
    container.append(
        createContactText(),
        (0,_page_elements_socials__WEBPACK_IMPORTED_MODULE_0__.createSocials)()
    );
    return container;
});



/***/ }),

/***/ "./src/modules/home-content/home-content.js":
/*!**************************************************!*\
  !*** ./src/modules/home-content/home-content.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeContent": () => (/* binding */ createHomeContent)
/* harmony export */ });
const createHomeContent = (() => {
    const content = document.createElement('div');
    content.setAttribute('class', 'slider');

    const restoName = document.createElement('p');
    restoName.textContent = 'Crust & Co.';

    const catchPhrase = document.createElement('span');
    catchPhrase.textContent = 'Crust me, our pizza is worth every slice!';

    content.append(
        restoName,
        catchPhrase
    )
    return content;
});



/***/ }),

/***/ "./src/modules/menu-content/menu-content.js":
/*!**************************************************!*\
  !*** ./src/modules/menu-content/menu-content.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuContent": () => (/* binding */ createMenuContent)
/* harmony export */ });
/* harmony import */ var _page_elements_socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-elements/socials */ "./src/modules/page-elements/socials.js");


const createMenuContent = (() => {
    const createMenuItem = (itemName) => {
        const container = document.createElement('div');

        const name = document.createElement('span');
        name.textContent = itemName;

        const description = document.createElement('p');
        description.textContent = `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Aenean aliquam aliquet 
        facilisis.`;

        container.append(
            name,
            description
        )
        return container;
    }

    const createMenuText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'menu-text');

        const menu = document.createElement('span');
        menu.textContent = 'Menu';

        const horizontalLine = document.createElement('hr');

        container.append(
            menu,
            horizontalLine,
            createMenuItem('Margherita  $5'),
            createMenuItem('Cheese n Corn $6'),
            createMenuItem('Farmhouse $6'),
            createMenuItem('Fresh Veggie $7'),
            createMenuItem('Cheese n Tomato $6'),
            createMenuItem('Garlic bread $4')
        );
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'menu');

    container.append(
        createMenuText(),
        (0,_page_elements_socials__WEBPACK_IMPORTED_MODULE_0__.createSocials)()
    )
    return container;
});



/***/ }),

/***/ "./src/modules/page-elements/main-footer.js":
/*!**************************************************!*\
  !*** ./src/modules/page-elements/main-footer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainFooter": () => (/* binding */ createMainFooter)
/* harmony export */ });
/* harmony import */ var _assets_icons_github_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/github-icon.png */ "./src/assets/icons/github-icon.png");


const createMainFooter = (() => {
    const mainLink = document.createElement('a');
    mainLink.setAttribute('href', 'https://github.com/Sankari-K/restaurant-page');
    mainLink.textContent = 'Sankari Karthik';
    mainLink.setAttribute('target',  '_blank');
    
    const githubLogo = document.createElement('img');
    githubLogo.src = _assets_icons_github_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    githubLogo.alt = 'github logo';

    const footer = document.createElement('footer');
    footer.append(
        githubLogo, 
        mainLink
    )
    return footer;
});



/***/ }),

/***/ "./src/modules/page-elements/main-header.js":
/*!**************************************************!*\
  !*** ./src/modules/page-elements/main-header.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainHeader": () => (/* binding */ createMainHeader)
/* harmony export */ });
/* harmony import */ var _assets_icons_location_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/location-icon.png */ "./src/assets/icons/location-icon.png");
/* harmony import */ var _assets_icons_timings_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/timings-icon.png */ "./src/assets/icons/timings-icon.png");
/* harmony import */ var _assets_icons_contact_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/contact-icon.png */ "./src/assets/icons/contact-icon.png");




const createMainHeader = (() => {
    const createAddress = () => {
        let container = document.createElement('div');

        let image = document.createElement('img');
        image.src = _assets_icons_location_icon_png__WEBPACK_IMPORTED_MODULE_0__;
        image.alt = 'location icon';

        let description = document.createElement('span');
        description.textContent = '123 Hillview Drive, Portland OR |';

        container.appendChild(image);
        container.appendChild(description);
        return container;
    }

    const createTimings = () => {
        let container = document.createElement('div');

        let image = document.createElement('img');
        image.src = _assets_icons_timings_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        image.alt = 'timings icon';

        let description = document.createElement('span');
        description.textContent = 'Weekdays 10AM - 2PM, Weekends 9AM - 2PM |';

        container.appendChild(image);
        container.appendChild(description);
        return container;
    }

    const createContact = () => {
        let container = document.createElement('div');

        let image = document.createElement('img');
        image.src = _assets_icons_contact_icon_png__WEBPACK_IMPORTED_MODULE_2__;
        image.alt = 'contact icon';

        let description = document.createElement('span');
        description.textContent = '(987) 654-3201';

        container.appendChild(image);
        container.appendChild(description);
        return container;
    }

    const mainHeader = document.createElement('address');
    mainHeader.append(
        createAddress(),
        createTimings(),
        createContact()
    )
    return mainHeader;
});




/***/ }),

/***/ "./src/modules/page-elements/main-nav.js":
/*!***********************************************!*\
  !*** ./src/modules/page-elements/main-nav.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainNav": () => (/* binding */ createMainNav)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png");


const createMainNav = (() => {
    const createLogo = () => {
        const logo = document.createElement('span');

        const link = document.createElement('a');
        link.setAttribute('href', '');
        const logoImg = document.createElement('img');
        logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;

        link.appendChild(logoImg);
        logo.appendChild(link);
        return logo;
    }

    const createTabs = (name) => {
        const container = document.createElement('a');

        const nameTab = document.createElement('span');
        nameTab.textContent = name;
        nameTab.setAttribute('id', `${name}`);

        container.appendChild(nameTab);
        return container;

    }
    
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'navigation');
    mainDiv.append(
        createTabs('Home'),
        createTabs('About'),
        createLogo(),
        createTabs('Menu'), 
        createTabs('Contact')
    )
    return mainDiv;
});



/***/ }),

/***/ "./src/modules/page-elements/socials.js":
/*!**********************************************!*\
  !*** ./src/modules/page-elements/socials.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSocials": () => (/* binding */ createSocials)
/* harmony export */ });
/* harmony import */ var _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/instagram-icon.png */ "./src/assets/icons/instagram-icon.png");
/* harmony import */ var _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/facebook-icon.png */ "./src/assets/icons/facebook-icon.png");
/* harmony import */ var _assets_icons_twitter_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/twitter-icon.png */ "./src/assets/icons/twitter-icon.png");




const createSocials = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'socials');

    const instaLink = document.createElement('a');
    instaLink.setAttribute('href', '');
    const instaPic = document.createElement('img');
    instaPic.src = _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    instaPic.alt = 'Instagram logo';
    instaLink.appendChild(instaPic);

    const fbLink = document.createElement('a');
    fbLink.setAttribute('href', '');
    const fbPic = document.createElement('img');
    fbPic.src = _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__;
    fbPic.alt = 'Facebook logo';
    fbLink.appendChild(fbPic);

    const twtLink = document.createElement('a');
    twtLink.setAttribute('href', '');
    const twtPic = document.createElement('img');
    twtPic.src = _assets_icons_twitter_icon_png__WEBPACK_IMPORTED_MODULE_2__;
    twtPic.alt = 'Twitter logo';
    twtLink.appendChild(twtPic);


    container.append(
        instaLink,
        fbLink,
        twtLink
    )
    return container;
};



/***/ }),

/***/ "./src/modules/pages/about-page.js":
/*!*****************************************!*\
  !*** ./src/modules/pages/about-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutPage": () => (/* binding */ createAboutPage)
/* harmony export */ });
/* harmony import */ var _about_content_about_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../about-content/about-content */ "./src/modules/about-content/about-content.js");
/* harmony import */ var _page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/main-footer */ "./src/modules/page-elements/main-footer.js");
/* harmony import */ var _page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-elements/main-header */ "./src/modules/page-elements/main-header.js");
/* harmony import */ var _page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-elements/main-nav */ "./src/modules/page-elements/main-nav.js");





const createAboutPage = (() => {
    const body = document.querySelector('div');
    body.append(
        (0,_page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__.createMainHeader)(),
        (0,_page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__.createMainNav)(),
        (0,_about_content_about_content__WEBPACK_IMPORTED_MODULE_0__.createAboutContent)(),
        (0,_page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__.createMainFooter)()
    )
    return body;
})



/***/ }),

/***/ "./src/modules/pages/contact-page.js":
/*!*******************************************!*\
  !*** ./src/modules/pages/contact-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _contact_content_contact_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-content/contact-content */ "./src/modules/contact-content/contact-content.js");
/* harmony import */ var _page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/main-footer */ "./src/modules/page-elements/main-footer.js");
/* harmony import */ var _page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-elements/main-header */ "./src/modules/page-elements/main-header.js");
/* harmony import */ var _page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-elements/main-nav */ "./src/modules/page-elements/main-nav.js");





const createContactPage = (() => {
    const body = document.querySelector('div');
    body.append(
        (0,_page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__.createMainHeader)(),
        (0,_page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__.createMainNav)(),
        (0,_contact_content_contact_content__WEBPACK_IMPORTED_MODULE_0__.createContactContent)(),
        (0,_page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__.createMainFooter)()
    )
    return body;
})



/***/ }),

/***/ "./src/modules/pages/home-page.js":
/*!****************************************!*\
  !*** ./src/modules/pages/home-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _home_content_home_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home-content/home-content */ "./src/modules/home-content/home-content.js");
/* harmony import */ var _page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/main-footer */ "./src/modules/page-elements/main-footer.js");
/* harmony import */ var _page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-elements/main-header */ "./src/modules/page-elements/main-header.js");
/* harmony import */ var _page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-elements/main-nav */ "./src/modules/page-elements/main-nav.js");





const createHomePage = (() => {
    const body = document.querySelector('div');
    body.append(
        (0,_page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__.createMainHeader)(),
        (0,_page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__.createMainNav)(),
        (0,_home_content_home_content__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)(),
        (0,_page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__.createMainFooter)()
    )
    return body;
});



/***/ }),

/***/ "./src/modules/pages/menu-page.js":
/*!****************************************!*\
  !*** ./src/modules/pages/menu-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _menu_content_menu_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-content/menu-content */ "./src/modules/menu-content/menu-content.js");
/* harmony import */ var _page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/main-footer */ "./src/modules/page-elements/main-footer.js");
/* harmony import */ var _page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-elements/main-header */ "./src/modules/page-elements/main-header.js");
/* harmony import */ var _page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-elements/main-nav */ "./src/modules/page-elements/main-nav.js");





const createMenuPage = (() => {
    const body = document.querySelector('div');
    body.append(
        (0,_page_elements_main_header__WEBPACK_IMPORTED_MODULE_2__.createMainHeader)(),
        (0,_page_elements_main_nav__WEBPACK_IMPORTED_MODULE_3__.createMainNav)(),
        (0,_menu_content_menu_content__WEBPACK_IMPORTED_MODULE_0__.createMenuContent)(),
        (0,_page_elements_main_footer__WEBPACK_IMPORTED_MODULE_1__.createMainFooter)()
    )
    return body;
})



/***/ }),

/***/ "./src/assets/hero-image.png":
/*!***********************************!*\
  !*** ./src/assets/hero-image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe6e2c22aa27a6a5cef0.png";

/***/ }),

/***/ "./src/assets/icons/contact-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/contact-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20a0ed4204215b0502d9.png";

/***/ }),

/***/ "./src/assets/icons/facebook-icon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/facebook-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7dec51a6125277dbca7.png";

/***/ }),

/***/ "./src/assets/icons/github-icon.png":
/*!******************************************!*\
  !*** ./src/assets/icons/github-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/assets/icons/instagram-icon.png":
/*!*********************************************!*\
  !*** ./src/assets/icons/instagram-icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d5cedd576ca1a740d7c.png";

/***/ }),

/***/ "./src/assets/icons/location-icon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/location-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2495adb158c9ee5ee6c2.png";

/***/ }),

/***/ "./src/assets/icons/timings-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/timings-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7579abd0e162ccfc0f5.png";

/***/ }),

/***/ "./src/assets/icons/twitter-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/twitter-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bae968a10cf48b100518.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33a659c1391a6ce7a128.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pages_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pages/home-page */ "./src/modules/pages/home-page.js");
/* harmony import */ var _modules_pages_about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pages/about-page */ "./src/modules/pages/about-page.js");
/* harmony import */ var _modules_pages_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pages/menu-page */ "./src/modules/pages/menu-page.js");
/* harmony import */ var _modules_pages_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pages/contact-page */ "./src/modules/pages/contact-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






function clearDOM() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function showHome() {
    clearDOM();
    (0,_modules_pages_home_page__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();

    const home = document.getElementById('Home');
    home.classList.add('focus');
}

function showAbout() {
    clearDOM();
    (0,_modules_pages_about_page__WEBPACK_IMPORTED_MODULE_1__.createAboutPage)();

    const about = document.getElementById('About');
    about.classList.add('focus');
}

function showMenu() {
    clearDOM();
    (0,_modules_pages_menu_page__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();

    const menu = document.getElementById('Menu');
    menu.classList.add('focus');
}

function showContact() {
    clearDOM();
    (0,_modules_pages_contact_page__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();

    const contact = document.getElementById('Contact');
    contact.classList.add('focus');
}

showHome();
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target == 'Home') showHome();
    else if (target == 'About') showAbout();
    else if (target == 'Menu') showMenu()
    else if (target == 'Contact') showContact();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFFQUFhO0FBQ3JCO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEd0Q7OztBQUd6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYTtBQUNyQjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlGRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3RDs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyRDtBQUNFO0FBQ0Y7QUFDTTtBQUM1Qzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0VBQWM7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwRUFBZTs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdFQUFjOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksOEVBQWlCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQtY29udGVudC9hYm91dC1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QtY29udGVudC9jb250YWN0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS1jb250ZW50L2hvbWUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LWNvbnRlbnQvbWVudS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtZWxlbWVudHMvbWFpbi1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1lbGVtZW50cy9tYWluLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWVsZW1lbnRzL21haW4tbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtZWxlbWVudHMvc29jaWFscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlcy9hYm91dC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VzL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlcy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9oZXJvLWltYWdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2w6ICNDQkIyOTg7XFxuICAgIC0tdGV4dC1jb2w6ICM1NjVFNDY7XFxuICAgIC0tdGV4dC1jb2wtbGlnaHQ6ICM2RTIyMDU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmFkZHJlc3MgPiBkaXYgPiBpbWcsIGZvb3RlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzclKSBzZXBpYSgzJSkgc2F0dXJhdGUoMzI1NCUpIGh1ZS1yb3RhdGUoMzhkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmFkZHJlc3MsIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxufVxcblxcbmFkZHJlc3MgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm5hdmlnYXRpb24sIC5hYm91dC10ZXh0IHNwYW4sIC5tZW51LXRleHQgc3BhbiwgLmNvbnRhY3QtdGV4dCA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uc2xpZGVyIHAsIC5zbGlkZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNsaWRlciBwIHtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbn1cXG5cXG4uYWJvdXQsIC5tZW51LCAuY29udGFjdCB7XFxuICAgIHBhZGRpbmc6IDUwcHggY2FsYygxMDBweCArIDEwdncpIDMwcHg7IC8qIGNoZWNrISAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uYWJvdXQgLnNvY2lhbHMsIC5tZW51IC5zb2NpYWxzLCAuY29udGFjdCAuc29jaWFscyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51IC5zb2NpYWxzIHtcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXG59XFxuXFxuLmFib3V0IC5zb2NpYWxzIGltZywgLm1lbnUgLnNvY2lhbHMgaW1nLCAuY29udGFjdCAuc29jaWFscyBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0LCAubWVudS10ZXh0LCAuY29udGFjdC10ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQtdGV4dCBzcGFuIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0IHAge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5ociB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ubWVudS10ZXh0IGRpdiB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTAwcHg7XFxufVxcblxcbi5tZW51LXRleHQgPiBkaXYgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIG91dGxpbmU6IDE2cHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHAge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCAucmVxdWlyZWQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNvbnRhY3QgI21lc3NhZ2Uge1xcbiAgICAvKiBsaW5lLWhlaWdodDpub3JtYWw7ICovXFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgdmVydGljYWwtYWxpZ246dGV4dC10b3A7ICBcXG5cXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAycHg7IFxcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sKTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQsIHRleHRhcmVhOnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4Y2JiMjtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCwgdGV4dGFyZWE6aW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjk5OTg7IFxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiA+Pj5cXFwiO1xcbn1cXG4gIFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9jdXMge1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4yNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDZGQUE2RjtBQUNqRzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpRkFBc0U7SUFDdEUsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUNBQXFDLEVBQUUsV0FBVztJQUNsRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2w6ICNDQkIyOTg7XFxuICAgIC0tdGV4dC1jb2w6ICM1NjVFNDY7XFxuICAgIC0tdGV4dC1jb2wtbGlnaHQ6ICM2RTIyMDU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmFkZHJlc3MgPiBkaXYgPiBpbWcsIGZvb3RlciA+IGltZ3tcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzclKSBzZXBpYSgzJSkgc2F0dXJhdGUoMzI1NCUpIGh1ZS1yb3RhdGUoMzhkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBpbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmFkZHJlc3MsIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxufVxcblxcbmFkZHJlc3MgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm5hdmlnYXRpb24sIC5hYm91dC10ZXh0IHNwYW4sIC5tZW51LXRleHQgc3BhbiwgLmNvbnRhY3QtdGV4dCA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2hlcm8taW1hZ2UucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uc2xpZGVyIHAsIC5zbGlkZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNsaWRlciBwIHtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbn1cXG5cXG4uYWJvdXQsIC5tZW51LCAuY29udGFjdCB7XFxuICAgIHBhZGRpbmc6IDUwcHggY2FsYygxMDBweCArIDEwdncpIDMwcHg7IC8qIGNoZWNrISAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uYWJvdXQgLnNvY2lhbHMsIC5tZW51IC5zb2NpYWxzLCAuY29udGFjdCAuc29jaWFscyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51IC5zb2NpYWxzIHtcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXG59XFxuXFxuLmFib3V0IC5zb2NpYWxzIGltZywgLm1lbnUgLnNvY2lhbHMgaW1nLCAuY29udGFjdCAuc29jaWFscyBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0LCAubWVudS10ZXh0LCAuY29udGFjdC10ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQtdGV4dCBzcGFuIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0IHAge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5ociB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ubWVudS10ZXh0IGRpdiB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTAwcHg7XFxufVxcblxcbi5tZW51LXRleHQgPiBkaXYgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIG91dGxpbmU6IDE2cHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHAge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCAucmVxdWlyZWQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNvbnRhY3QgI21lc3NhZ2Uge1xcbiAgICAvKiBsaW5lLWhlaWdodDpub3JtYWw7ICovXFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgdmVydGljYWwtYWxpZ246dGV4dC10b3A7ICBcXG5cXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAycHg7IFxcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sKTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQsIHRleHRhcmVhOnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4Y2JiMjtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCwgdGV4dGFyZWE6aW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjk5OTg7IFxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiA+Pj5cXFwiO1xcbn1cXG4gIFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9jdXMge1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4yNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU29jaWFscyB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL3NvY2lhbHNcIjtcblxuY29uc3QgY3JlYXRlQWJvdXRDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVBYm91dFRleHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW5UZXh0LnRleHRDb250ZW50ID0gJ1dobyB3ZSBhcmUnO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBjb25zdCBwYXJhT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhT25lLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFxuICAgICAgICBJbiBlcm9zIG5pYmgsIGZpbmlidXMgZXUgdml2ZXJyYSBpZCwgbWF0dGlzIGFjIHF1YW0uIFxuICAgICAgICBNYWVjZW5hcyBzaXQgYW1ldCBydXRydW0gbGVvLiBDcmFzIGNvbmRpbWVudHVtIGVmZmljaXR1ciBcbiAgICAgICAgbGlndWxhLCBldSBydXRydW0gaXBzdW0gaWFjdWxpcyBhdC4gUGhhc2VsbHVzIGxhY3VzIHRvcnRvciwgXG4gICAgICAgIGhlbmRyZXJpdCBzb2RhbGVzIG1hZ25hIHZlc3RpYnVsdW0sIGludGVyZHVtIHVsdHJpY2VzIGVzdC5cbiAgICAgICAgUHJvaW4gcXVpcyBtYXVyaXMgYSBvcmNpIGJsYW5kaXQgYWxpcXVldC4gRG9uZWMgZXUgZWdlc3RhcyBcbiAgICAgICAgbmVxdWUsIGF0IGN1cnN1cyBtYXVyaXMuYDtcblxuICAgICAgICBjb25zdCBwYXJhVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhVHdvLnRleHRDb250ZW50ID0gYEFsaXF1YW0gZXQgbnVsbGEgbGVjdHVzLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBcbiAgICAgICAgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gXG4gICAgICAgIEN1cmFiaXR1ciBuZWMgYXVndWUgYWMgb2RpbyBzY2VsZXJpc3F1ZSBlZ2VzdGFzIGV1IGF0IGVsaXQuXG4gICAgICAgIFZlc3RpYnVsdW0gZG9sb3IgdGVsbHVzLCBsdWN0dXMgZWdldCBjb25kaW1lbnR1bSBzaXQgYW1ldCwgXG4gICAgICAgIHRpbmNpZHVudCBpZCBsaWJlcm8uIERvbmVjIHZpdGFlIHRlbXBvciBhbnRlLiBJbnRlcmR1bSBldCBcbiAgICAgICAgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxuICAgICAgICBBbGlxdWFtIGV0IG51bGxhIGxlY3R1cy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgXG4gICAgICAgIG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuYDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgc3BhblRleHQsXG4gICAgICAgICAgICBob3Jpem9udGFsTGluZSxcbiAgICAgICAgICAgIHBhcmFPbmUsXG4gICAgICAgICAgICBwYXJhVHdvXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWJvdXQnKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUFib3V0VGV4dCgpLFxuICAgICAgICBjcmVhdGVTb2NpYWxzKClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUFib3V0Q29udGVudFxufTsiLCJpbXBvcnQgeyBjcmVhdGVTb2NpYWxzIH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvc29jaWFsc1wiO1xuXG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9IChmb3JJbmZvLCB0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JJbmZvKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBmb3JJbmZvWzBdLnRvVXBwZXJDYXNlKCkgKyBmb3JJbmZvLnNsaWNlKDEpO1xuICAgICAgICBjb25zdCByZXF1aXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcmVxdWlyZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXF1aXJlZCcpO1xuICAgICAgICByZXF1aXJlZC50ZXh0Q29udGVudCA9ICcqJztcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQocmVxdWlyZWQpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlucHV0LmlkID0gZm9ySW5mbztcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGlucHV0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5uYW1lID0gXCJmb3JtXCI7XG4gICAgICAgIGZvcm0uYWN0aW9uID0gXCIuL2luZGV4Lmh0bWxcIjtcblxuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcblxuICAgICAgICBjb25zdCByZXF1aXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcmVxdWlyZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXF1aXJlZCcpO1xuICAgICAgICByZXF1aXJlZC50ZXh0Q29udGVudCA9ICcqJztcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQocmVxdWlyZWQpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBpbnB1dEZpZWxkLm5hbWUgPSAnbWVzc2FnZSc7XG4gICAgICAgIGlucHV0RmllbGQuaWQgPSAnbWVzc2FnZSc7XG4gICAgICAgIGlucHV0RmllbGQubWluTGVuZ3RoID0gJzUnO1xuICAgICAgICBpbnB1dEZpZWxkLnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICB0ZXh0YXJlYS5hcHBlbmQoXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGlucHV0RmllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmQoXG4gICAgICAgICAgICBjcmVhdGVJbnB1dCgnbmFtZScsICd0ZXh0JyksXG4gICAgICAgICAgICBjcmVhdGVJbnB1dCgnZW1haWwnLCAnZW1haWwnKSxcbiAgICAgICAgICAgIHRleHRhcmVhLFxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RUZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzISc7XG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICBjb25zdCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzdWJoZWFkaW5nLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaWxsIHRoaXMgZm9ybSBhbmQgd2VcXCdsbCBnZXQgaW4gdG91Y2ggd2l0aCB5b3Ugc29vbi4nO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBoZWFkaW5nLFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmUsXG4gICAgICAgICAgICBzdWJoZWFkaW5nLFxuICAgICAgICAgICAgY3JlYXRlRm9ybSgpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RUZXh0KCksXG4gICAgICAgIGNyZWF0ZVNvY2lhbHMoKVxuICAgICk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhY3RDb250ZW50XG59OyIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlcicpO1xuXG4gICAgY29uc3QgcmVzdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc3RvTmFtZS50ZXh0Q29udGVudCA9ICdDcnVzdCAmIENvLic7XG5cbiAgICBjb25zdCBjYXRjaFBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXRjaFBocmFzZS50ZXh0Q29udGVudCA9ICdDcnVzdCBtZSwgb3VyIHBpenphIGlzIHdvcnRoIGV2ZXJ5IHNsaWNlISc7XG5cbiAgICBjb250ZW50LmFwcGVuZChcbiAgICAgICAgcmVzdG9OYW1lLFxuICAgICAgICBjYXRjaFBocmFzZVxuICAgIClcbiAgICByZXR1cm4gY29udGVudDtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVDb250ZW50XG59OyIsImltcG9ydCB7IGNyZWF0ZVNvY2lhbHMgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9zb2NpYWxzXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcbiAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYWxpcXVhbSBhbGlxdWV0IFxuICAgICAgICBmYWNpbGlzaXMuYDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51VGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBtZW51LFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmUsXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnTWFyZ2hlcml0YSAgJDUnKSxcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdDaGVlc2UgbiBDb3JuICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRmFybWhvdXNlICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRnJlc2ggVmVnZ2llICQ3JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnQ2hlZXNlIG4gVG9tYXRvICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnR2FybGljIGJyZWFkICQ0JylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNZW51VGV4dCgpLFxuICAgICAgICBjcmVhdGVTb2NpYWxzKClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVDb250ZW50XG59OyIsImltcG9ydCBnaXRIdWJMb2dvU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9naXRodWItaWNvbi5wbmcnO1xuXG5jb25zdCBjcmVhdGVNYWluRm9vdGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtYWluTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1NhbmthcmktSy9yZXN0YXVyYW50LXBhZ2UnKTtcbiAgICBtYWluTGluay50ZXh0Q29udGVudCA9ICdTYW5rYXJpIEthcnRoaWsnO1xuICAgIG1haW5MaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgICdfYmxhbmsnKTtcbiAgICBcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0aHViTG9nby5zcmMgPSBnaXRIdWJMb2dvU3JjO1xuICAgIGdpdGh1YkxvZ28uYWx0ID0gJ2dpdGh1YiBsb2dvJztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5hcHBlbmQoXG4gICAgICAgIGdpdGh1YkxvZ28sIFxuICAgICAgICBtYWluTGlua1xuICAgIClcbiAgICByZXR1cm4gZm9vdGVyO1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWFpbkZvb3RlclxufTsiLCJpbXBvcnQgYWRkcmVzc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvbG9jYXRpb24taWNvbi5wbmcnXG5pbXBvcnQgdGltaW5nc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdGltaW5ncy1pY29uLnBuZydcbmltcG9ydCBjb250YWN0U3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jb250YWN0LWljb24ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVBZGRyZXNzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICdsb2NhdGlvbiBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJzEyMyBIaWxsdmlldyBEcml2ZSwgUG9ydGxhbmQgT1IgfCc7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUaW1pbmdzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IHRpbWluZ3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICd0aW1pbmdzIGljb24nO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Vla2RheXMgMTBBTSAtIDJQTSwgV2Vla2VuZHMgOUFNIC0gMlBNIHwnO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0U3JjO1xuICAgICAgICBpbWFnZS5hbHQgPSAnY29udGFjdCBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyg5ODcpIDY1NC0zMjAxJztcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJyk7XG4gICAgbWFpbkhlYWRlci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUFkZHJlc3MoKSxcbiAgICAgICAgY3JlYXRlVGltaW5ncygpLFxuICAgICAgICBjcmVhdGVDb250YWN0KClcbiAgICApXG4gICAgcmV0dXJuIG1haW5IZWFkZXI7XG59KTtcblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW5IZWFkZXJcbn07IiwiaW1wb3J0IGxvZ29JbWdTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2xvZ28ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluTmF2ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgICAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxvZ29JbWcuc3JjID0gbG9nb0ltZ1NyYztcblxuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJzID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5hbWVUYWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBuYW1lVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtuYW1lfWApO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lVGFiKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdmlnYXRpb24nKTtcbiAgICBtYWluRGl2LmFwcGVuZChcbiAgICAgICAgY3JlYXRlVGFicygnSG9tZScpLFxuICAgICAgICBjcmVhdGVUYWJzKCdBYm91dCcpLFxuICAgICAgICBjcmVhdGVMb2dvKCksXG4gICAgICAgIGNyZWF0ZVRhYnMoJ01lbnUnKSwgXG4gICAgICAgIGNyZWF0ZVRhYnMoJ0NvbnRhY3QnKVxuICAgIClcbiAgICByZXR1cm4gbWFpbkRpdjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW5OYXZcbn07IiwiaW1wb3J0IGluc3RhUGljU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0taWNvbi5wbmcnXG5pbXBvcnQgZmJQaWNTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWljb24ucG5nJ1xuaW1wb3J0IHR3dFBpY1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci1pY29uLnBuZydcblxuY29uc3QgY3JlYXRlU29jaWFscyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzb2NpYWxzJyk7XG5cbiAgICBjb25zdCBpbnN0YUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW5zdGFMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcnKTtcbiAgICBjb25zdCBpbnN0YVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluc3RhUGljLnNyYyA9IGluc3RhUGljU3JjO1xuICAgIGluc3RhUGljLmFsdCA9ICdJbnN0YWdyYW0gbG9nbyc7XG4gICAgaW5zdGFMaW5rLmFwcGVuZENoaWxkKGluc3RhUGljKTtcblxuICAgIGNvbnN0IGZiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmYkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgIGNvbnN0IGZiUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmJQaWMuc3JjID0gZmJQaWNTcmM7XG4gICAgZmJQaWMuYWx0ID0gJ0ZhY2Vib29rIGxvZ28nO1xuICAgIGZiTGluay5hcHBlbmRDaGlsZChmYlBpYyk7XG5cbiAgICBjb25zdCB0d3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHR3dExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgIGNvbnN0IHR3dFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHR3dFBpYy5zcmMgPSB0d3RQaWNTcmM7XG4gICAgdHd0UGljLmFsdCA9ICdUd2l0dGVyIGxvZ28nO1xuICAgIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0UGljKTtcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgaW5zdGFMaW5rLFxuICAgICAgICBmYkxpbmssXG4gICAgICAgIHR3dExpbmtcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlU29jaWFsc1xufTsiLCJpbXBvcnQgeyBjcmVhdGVBYm91dENvbnRlbnQgfSBmcm9tIFwiLi4vYWJvdXQtY29udGVudC9hYm91dC1jb250ZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluRm9vdGVyIH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1mb290ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5IZWFkZXIgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLWhlYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbk5hdiB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4tbmF2XCI7XG5cbmNvbnN0IGNyZWF0ZUFib3V0UGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgIGJvZHkuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNYWluSGVhZGVyKCksXG4gICAgICAgIGNyZWF0ZU1haW5OYXYoKSxcbiAgICAgICAgY3JlYXRlQWJvdXRDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQWJvdXRQYWdlXG59OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDb250ZW50IH0gZnJvbSBcIi4uL2NvbnRhY3QtY29udGVudC9jb250YWN0LWNvbnRlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLWZvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkhlYWRlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluTmF2IH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXZcIjtcblxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2Vcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfSBmcm9tICcuLi9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50JztcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4tZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZU1haW5IZWFkZXIgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZU1haW5OYXYgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4tbmF2JztcblxuY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZUhvbWVDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVQYWdlXG59OyIsImltcG9ydCB7IGNyZWF0ZU1lbnVDb250ZW50IH0gZnJvbSBcIi4uL21lbnUtY29udGVudC9tZW51LWNvbnRlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLWZvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkhlYWRlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluTmF2IH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXZcIjtcblxuY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZU1lbnVDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWVudVBhZ2Vcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VzL2hvbWUtcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlcy9hYm91dC1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21vZHVsZXMvcGFnZXMvbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gXCIuL21vZHVsZXMvcGFnZXMvY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgY2xlYXJET00oKTtcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gICAgY2xlYXJET00oKTtcbiAgICBjcmVhdGVBYm91dFBhZ2UoKTtcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbn1cblxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgY2xlYXJET00oKTtcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNZW51Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xufVxuXG5mdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbnRhY3QnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG59XG5cbnNob3dIb21lKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgaWYgKHRhcmdldCA9PSAnSG9tZScpIHNob3dIb21lKCk7XG4gICAgZWxzZSBpZiAodGFyZ2V0ID09ICdBYm91dCcpIHNob3dBYm91dCgpO1xuICAgIGVsc2UgaWYgKHRhcmdldCA9PSAnTWVudScpIHNob3dNZW51KClcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gJ0NvbnRhY3QnKSBzaG93Q29udGFjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=