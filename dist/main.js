/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        malesuada fames ac ante ipsum primis in faucibus.`;

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
        container.setAttribute('href', "");

        const nameTab = document.createElement('span');
        nameTab.textContent = name;

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
// console.log("Heya!");




// createHomePage();
(0,_modules_pages_about_page__WEBPACK_IMPORTED_MODULE_1__.createAboutPage)();
// createMenuPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkZ0U7QUFDRDtBQUNBO0FBQ047O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEVBQWdCO0FBQ3hCLFFBQVEsc0VBQWE7QUFDckIsUUFBUSw2RUFBaUI7QUFDekIsUUFBUSw0RUFBZ0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUMyRDtBQUNFO0FBQ0Y7O0FBRTNEO0FBQ0EsMEVBQWU7QUFDZixvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LWNvbnRlbnQvYWJvdXQtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUtY29udGVudC9tZW51LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1lbGVtZW50cy9tYWluLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1lbGVtZW50cy9zb2NpYWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VzL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNvY2lhbHMgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9zb2NpYWxzXCI7XG5cbmNvbnN0IGNyZWF0ZUFib3V0Q29udGVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQWJvdXRUZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWJvdXQtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IHNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuVGV4dC50ZXh0Q29udGVudCA9ICdXaG8gd2UgYXJlJztcblxuICAgICAgICBjb25zdCBob3Jpem9udGFsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICAgICAgY29uc3QgcGFyYU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYU9uZS50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBcbiAgICAgICAgSW4gZXJvcyBuaWJoLCBmaW5pYnVzIGV1IHZpdmVycmEgaWQsIG1hdHRpcyBhYyBxdWFtLiBcbiAgICAgICAgTWFlY2VuYXMgc2l0IGFtZXQgcnV0cnVtIGxlby4gQ3JhcyBjb25kaW1lbnR1bSBlZmZpY2l0dXIgXG4gICAgICAgIGxpZ3VsYSwgZXUgcnV0cnVtIGlwc3VtIGlhY3VsaXMgYXQuIFBoYXNlbGx1cyBsYWN1cyB0b3J0b3IsIFxuICAgICAgICBoZW5kcmVyaXQgc29kYWxlcyBtYWduYSB2ZXN0aWJ1bHVtLCBpbnRlcmR1bSB1bHRyaWNlcyBlc3QuXG4gICAgICAgIFByb2luIHF1aXMgbWF1cmlzIGEgb3JjaSBibGFuZGl0IGFsaXF1ZXQuIERvbmVjIGV1IGVnZXN0YXMgXG4gICAgICAgIG5lcXVlLCBhdCBjdXJzdXMgbWF1cmlzLmA7XG5cbiAgICAgICAgY29uc3QgcGFyYVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYVR3by50ZXh0Q29udGVudCA9IGBBbGlxdWFtIGV0IG51bGxhIGxlY3R1cy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgXG4gICAgICAgIG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFxuICAgICAgICBDdXJhYml0dXIgbmVjIGF1Z3VlIGFjIG9kaW8gc2NlbGVyaXNxdWUgZWdlc3RhcyBldSBhdCBlbGl0LlxuICAgICAgICBWZXN0aWJ1bHVtIGRvbG9yIHRlbGx1cywgbHVjdHVzIGVnZXQgY29uZGltZW50dW0gc2l0IGFtZXQsIFxuICAgICAgICB0aW5jaWR1bnQgaWQgbGliZXJvLiBEb25lYyB2aXRhZSB0ZW1wb3IgYW50ZS4gSW50ZXJkdW0gZXQgXG4gICAgICAgIG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5gO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBzcGFuVGV4dCxcbiAgICAgICAgICAgIGhvcml6b250YWxMaW5lLFxuICAgICAgICAgICAgcGFyYU9uZSxcbiAgICAgICAgICAgIHBhcmFUd29cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dCcpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQWJvdXRUZXh0KCksXG4gICAgICAgIGNyZWF0ZVNvY2lhbHMoKVxuICAgIClcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQWJvdXRDb250ZW50XG59OyIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlcicpO1xuXG4gICAgY29uc3QgcmVzdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc3RvTmFtZS50ZXh0Q29udGVudCA9ICdDcnVzdCAmIENvLic7XG5cbiAgICBjb25zdCBjYXRjaFBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXRjaFBocmFzZS50ZXh0Q29udGVudCA9ICdDcnVzdCBtZSwgb3VyIHBpenphIGlzIHdvcnRoIGV2ZXJ5IHNsaWNlISc7XG5cbiAgICBjb250ZW50LmFwcGVuZChcbiAgICAgICAgcmVzdG9OYW1lLFxuICAgICAgICBjYXRjaFBocmFzZVxuICAgIClcbiAgICByZXR1cm4gY29udGVudDtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVDb250ZW50XG59OyIsImltcG9ydCB7IGNyZWF0ZVNvY2lhbHMgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9zb2NpYWxzXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcbiAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYWxpcXVhbSBhbGlxdWV0IFxuICAgICAgICBmYWNpbGlzaXMuYDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51VGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBtZW51LFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmUsXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnTWFyZ2hlcml0YSAgJDUnKSxcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdDaGVlc2UgbiBDb3JuICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRmFybWhvdXNlICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRnJlc2ggVmVnZ2llICQ3JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnQ2hlZXNlIG4gVG9tYXRvICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnR2FybGljIGJyZWFkICQ0JylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNZW51VGV4dCgpLFxuICAgICAgICBjcmVhdGVTb2NpYWxzKClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVDb250ZW50XG59OyIsImltcG9ydCBnaXRIdWJMb2dvU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9naXRodWItaWNvbi5wbmcnO1xuXG5jb25zdCBjcmVhdGVNYWluRm9vdGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtYWluTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1NhbmthcmktSy9yZXN0YXVyYW50LXBhZ2UnKTtcbiAgICBtYWluTGluay50ZXh0Q29udGVudCA9ICdTYW5rYXJpIEthcnRoaWsnO1xuICAgIG1haW5MaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgICdfYmxhbmsnKTtcbiAgICBcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0aHViTG9nby5zcmMgPSBnaXRIdWJMb2dvU3JjO1xuICAgIGdpdGh1YkxvZ28uYWx0ID0gJ2dpdGh1YiBsb2dvJztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5hcHBlbmQoXG4gICAgICAgIGdpdGh1YkxvZ28sIFxuICAgICAgICBtYWluTGlua1xuICAgIClcbiAgICByZXR1cm4gZm9vdGVyO1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWFpbkZvb3RlclxufTsiLCJpbXBvcnQgYWRkcmVzc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvbG9jYXRpb24taWNvbi5wbmcnXG5pbXBvcnQgdGltaW5nc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdGltaW5ncy1pY29uLnBuZydcbmltcG9ydCBjb250YWN0U3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jb250YWN0LWljb24ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVBZGRyZXNzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICdsb2NhdGlvbiBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJzEyMyBIaWxsdmlldyBEcml2ZSwgUG9ydGxhbmQgT1IgfCc7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUaW1pbmdzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IHRpbWluZ3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICd0aW1pbmdzIGljb24nO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Vla2RheXMgMTBBTSAtIDJQTSwgV2Vla2VuZHMgOUFNIC0gMlBNIHwnO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0U3JjO1xuICAgICAgICBpbWFnZS5hbHQgPSAnY29udGFjdCBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyg5ODcpIDY1NC0zMjAxJztcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJyk7XG4gICAgbWFpbkhlYWRlci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUFkZHJlc3MoKSxcbiAgICAgICAgY3JlYXRlVGltaW5ncygpLFxuICAgICAgICBjcmVhdGVDb250YWN0KClcbiAgICApXG4gICAgcmV0dXJuIG1haW5IZWFkZXI7XG59KTtcblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW5IZWFkZXJcbn07IiwiaW1wb3J0IGxvZ29JbWdTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2xvZ28ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluTmF2ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgICAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxvZ29JbWcuc3JjID0gbG9nb0ltZ1NyYztcblxuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJzID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG5cbiAgICAgICAgY29uc3QgbmFtZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmFtZVRhYi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVUYWIpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2aWdhdGlvbicpO1xuICAgIG1haW5EaXYuYXBwZW5kKFxuICAgICAgICBjcmVhdGVUYWJzKCdIb21lJyksXG4gICAgICAgIGNyZWF0ZVRhYnMoJ0Fib3V0JyksXG4gICAgICAgIGNyZWF0ZUxvZ28oKSxcbiAgICAgICAgY3JlYXRlVGFicygnTWVudScpLCBcbiAgICAgICAgY3JlYXRlVGFicygnQ29udGFjdCcpXG4gICAgKVxuICAgIHJldHVybiBtYWluRGl2O1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWFpbk5hdlxufTsiLCJpbXBvcnQgaW5zdGFQaWNTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS1pY29uLnBuZydcbmltcG9ydCBmYlBpY1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2staWNvbi5wbmcnXG5pbXBvcnQgdHd0UGljU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWljb24ucG5nJ1xuXG5jb25zdCBjcmVhdGVTb2NpYWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NvY2lhbHMnKTtcblxuICAgIGNvbnN0IGluc3RhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbnN0YUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgIGNvbnN0IGluc3RhUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW5zdGFQaWMuc3JjID0gaW5zdGFQaWNTcmM7XG4gICAgaW5zdGFQaWMuYWx0ID0gJ0luc3RhZ3JhbSBsb2dvJztcbiAgICBpbnN0YUxpbmsuYXBwZW5kQ2hpbGQoaW5zdGFQaWMpO1xuXG4gICAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZiTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnJyk7XG4gICAgY29uc3QgZmJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmYlBpYy5zcmMgPSBmYlBpY1NyYztcbiAgICBmYlBpYy5hbHQgPSAnRmFjZWJvb2sgbG9nbyc7XG4gICAgZmJMaW5rLmFwcGVuZENoaWxkKGZiUGljKTtcblxuICAgIGNvbnN0IHR3dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdHd0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnJyk7XG4gICAgY29uc3QgdHd0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHd0UGljLnNyYyA9IHR3dFBpY1NyYztcbiAgICB0d3RQaWMuYWx0ID0gJ1R3aXR0ZXIgbG9nbyc7XG4gICAgdHd0TGluay5hcHBlbmRDaGlsZCh0d3RQaWMpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICBpbnN0YUxpbmssXG4gICAgICAgIGZiTGluayxcbiAgICAgICAgdHd0TGlua1xuICAgIClcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVTb2NpYWxzXG59OyIsImltcG9ydCB7IGNyZWF0ZUFib3V0Q29udGVudCB9IGZyb20gXCIuLi9hYm91dC1jb250ZW50L2Fib3V0LWNvbnRlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLWZvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkhlYWRlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluTmF2IH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXZcIjtcblxuY29uc3QgY3JlYXRlQWJvdXRQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgYm9keS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZU1haW5IZWFkZXIoKSxcbiAgICAgICAgY3JlYXRlTWFpbk5hdigpLFxuICAgICAgICBjcmVhdGVBYm91dENvbnRlbnQoKSxcbiAgICAgICAgY3JlYXRlTWFpbkZvb3RlcigpXG4gICAgKVxuICAgIHJldHVybiBib2R5O1xufSlcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVBYm91dFBhZ2Vcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfSBmcm9tICcuLi9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50JztcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4tZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZU1haW5IZWFkZXIgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZU1haW5OYXYgfSBmcm9tICcuLi9wYWdlLWVsZW1lbnRzL21haW4tbmF2JztcblxuY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZUhvbWVDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVQYWdlXG59OyIsImltcG9ydCB7IGNyZWF0ZU1lbnVDb250ZW50IH0gZnJvbSBcIi4uL21lbnUtY29udGVudC9tZW51LWNvbnRlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5Gb290ZXIgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLWZvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkhlYWRlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4taGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluTmF2IH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXZcIjtcblxuY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZU1lbnVDb250ZW50KCksXG4gICAgICAgIGNyZWF0ZU1haW5Gb290ZXIoKVxuICAgIClcbiAgICByZXR1cm4gYm9keTtcbn0pXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWVudVBhZ2Vcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBjb25zb2xlLmxvZyhcIkhleWEhXCIpO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VzL2hvbWUtcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlcy9hYm91dC1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21vZHVsZXMvcGFnZXMvbWVudS1wYWdlXCI7XG5cbi8vIGNyZWF0ZUhvbWVQYWdlKCk7XG5jcmVhdGVBYm91dFBhZ2UoKTtcbi8vIGNyZWF0ZU1lbnVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9