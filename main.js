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
/* harmony import */ var _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/instagram-icon.png */ "./src/assets/icons/instagram-icon.png");
/* harmony import */ var _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/facebook-icon.png */ "./src/assets/icons/facebook-icon.png");
/* harmony import */ var _assets_icons_twitter_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/twitter-icon.png */ "./src/assets/icons/twitter-icon.png");




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

    const createSocials = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'socials');

        const instaLink = document.createElement('a');
        const instaPic = document.createElement('img');
        instaPic.src = _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__;
        instaPic.alt = 'Instagram logo';
        instaLink.appendChild(instaPic);

        const fbLink = document.createElement('a');
        const fbPic = document.createElement('img');
        fbPic.src = _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        fbPic.alt = 'Facebook logo';
        fbLink.appendChild(fbPic);

        const twtLink = document.createElement('a');
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
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'about');

    container.append(
        createAboutText(),
        createSocials()
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
/* harmony import */ var _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/instagram-icon.png */ "./src/assets/icons/instagram-icon.png");
/* harmony import */ var _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/facebook-icon.png */ "./src/assets/icons/facebook-icon.png");
/* harmony import */ var _assets_icons_twitter_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/twitter-icon.png */ "./src/assets/icons/twitter-icon.png");




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

    const createSocials = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'socials');

        const instaLink = document.createElement('a');
        const instaPic = document.createElement('img');
        instaPic.src = _assets_icons_instagram_icon_png__WEBPACK_IMPORTED_MODULE_0__;
        instaPic.alt = 'Instagram logo';
        instaLink.appendChild(instaPic);

        const fbLink = document.createElement('a');
        const fbPic = document.createElement('img');
        fbPic.src = _assets_icons_facebook_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        fbPic.alt = 'Facebook logo';
        fbLink.appendChild(fbPic);

        const twtLink = document.createElement('a');
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
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'menu');

    container.append(
        createMenuText(),
        createSocials()
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
        const logoImg = document.createElement('img');
        logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;

        link.appendChild(logoImg);
        logo.appendChild(link);
        return logo;
    }

    const home = document.createElement('span');
    home.textContent = 'Home';

    const about = document.createElement('span');
    about.textContent = 'About';

    const menu = document.createElement('span');
    menu.textContent = 'Menu';

    const contact = document.createElement('span');
    contact.textContent = 'Contact';

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'navigation');
    mainDiv.append(
        home,
        about,
        createLogo(),
        menu, 
        contact
    )
    return mainDiv;
});



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
// createAboutPage();
(0,_modules_pages_menu_page__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxRQUFRLDRFQUFnQjtBQUN4QixRQUFRLHNFQUFhO0FBQ3JCLFFBQVEsNkVBQWlCO0FBQ3pCLFFBQVEsNEVBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RnRTtBQUNEO0FBQ0E7QUFDTjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBZ0I7QUFDeEIsUUFBUSxzRUFBYTtBQUNyQixRQUFRLDZFQUFpQjtBQUN6QixRQUFRLDRFQUFnQjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJEO0FBQ0U7QUFDRjs7QUFFM0Q7QUFDQTtBQUNBLHdFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC1jb250ZW50L2Fib3V0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS1jb250ZW50L2hvbWUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LWNvbnRlbnQvbWVudS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtZWxlbWVudHMvbWFpbi1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1lbGVtZW50cy9tYWluLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWVsZW1lbnRzL21haW4tbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VzL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnN0YVBpY1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWljb24ucG5nJ1xuaW1wb3J0IGZiUGljU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1pY29uLnBuZydcbmltcG9ydCB0d3RQaWNTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXItaWNvbi5wbmcnXG5cbmNvbnN0IGNyZWF0ZUFib3V0Q29udGVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQWJvdXRUZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWJvdXQtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IHNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuVGV4dC50ZXh0Q29udGVudCA9ICdXaG8gd2UgYXJlJztcblxuICAgICAgICBjb25zdCBob3Jpem9udGFsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICAgICAgY29uc3QgcGFyYU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYU9uZS50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBcbiAgICAgICAgSW4gZXJvcyBuaWJoLCBmaW5pYnVzIGV1IHZpdmVycmEgaWQsIG1hdHRpcyBhYyBxdWFtLiBcbiAgICAgICAgTWFlY2VuYXMgc2l0IGFtZXQgcnV0cnVtIGxlby4gQ3JhcyBjb25kaW1lbnR1bSBlZmZpY2l0dXIgXG4gICAgICAgIGxpZ3VsYSwgZXUgcnV0cnVtIGlwc3VtIGlhY3VsaXMgYXQuIFBoYXNlbGx1cyBsYWN1cyB0b3J0b3IsIFxuICAgICAgICBoZW5kcmVyaXQgc29kYWxlcyBtYWduYSB2ZXN0aWJ1bHVtLCBpbnRlcmR1bSB1bHRyaWNlcyBlc3QuXG4gICAgICAgIFByb2luIHF1aXMgbWF1cmlzIGEgb3JjaSBibGFuZGl0IGFsaXF1ZXQuIERvbmVjIGV1IGVnZXN0YXMgXG4gICAgICAgIG5lcXVlLCBhdCBjdXJzdXMgbWF1cmlzLmA7XG5cbiAgICAgICAgY29uc3QgcGFyYVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYVR3by50ZXh0Q29udGVudCA9IGBBbGlxdWFtIGV0IG51bGxhIGxlY3R1cy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgXG4gICAgICAgIG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFxuICAgICAgICBDdXJhYml0dXIgbmVjIGF1Z3VlIGFjIG9kaW8gc2NlbGVyaXNxdWUgZWdlc3RhcyBldSBhdCBlbGl0LlxuICAgICAgICBWZXN0aWJ1bHVtIGRvbG9yIHRlbGx1cywgbHVjdHVzIGVnZXQgY29uZGltZW50dW0gc2l0IGFtZXQsIFxuICAgICAgICB0aW5jaWR1bnQgaWQgbGliZXJvLiBEb25lYyB2aXRhZSB0ZW1wb3IgYW50ZS4gSW50ZXJkdW0gZXQgXG4gICAgICAgIG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5gO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBzcGFuVGV4dCxcbiAgICAgICAgICAgIGhvcml6b250YWxMaW5lLFxuICAgICAgICAgICAgcGFyYU9uZSxcbiAgICAgICAgICAgIHBhcmFUd29cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTb2NpYWxzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc29jaWFscycpO1xuXG4gICAgICAgIGNvbnN0IGluc3RhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29uc3QgaW5zdGFQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW5zdGFQaWMuc3JjID0gaW5zdGFQaWNTcmM7XG4gICAgICAgIGluc3RhUGljLmFsdCA9ICdJbnN0YWdyYW0gbG9nbyc7XG4gICAgICAgIGluc3RhTGluay5hcHBlbmRDaGlsZChpbnN0YVBpYyk7XG5cbiAgICAgICAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBmYlBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBmYlBpYy5zcmMgPSBmYlBpY1NyYztcbiAgICAgICAgZmJQaWMuYWx0ID0gJ0ZhY2Vib29rIGxvZ28nO1xuICAgICAgICBmYkxpbmsuYXBwZW5kQ2hpbGQoZmJQaWMpO1xuXG4gICAgICAgIGNvbnN0IHR3dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IHR3dFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0d3RQaWMuc3JjID0gdHd0UGljU3JjO1xuICAgICAgICB0d3RQaWMuYWx0ID0gJ1R3aXR0ZXIgbG9nbyc7XG4gICAgICAgIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0UGljKTtcblxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBpbnN0YUxpbmssXG4gICAgICAgICAgICBmYkxpbmssXG4gICAgICAgICAgICB0d3RMaW5rXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dCcpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQWJvdXRUZXh0KCksXG4gICAgICAgIGNyZWF0ZVNvY2lhbHMoKVxuICAgIClcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQWJvdXRDb250ZW50XG59OyIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlcicpO1xuXG4gICAgY29uc3QgcmVzdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc3RvTmFtZS50ZXh0Q29udGVudCA9ICdDcnVzdCAmIENvLic7XG5cbiAgICBjb25zdCBjYXRjaFBocmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXRjaFBocmFzZS50ZXh0Q29udGVudCA9ICdDcnVzdCBtZSwgb3VyIHBpenphIGlzIHdvcnRoIGV2ZXJ5IHNsaWNlISc7XG5cbiAgICBjb250ZW50LmFwcGVuZChcbiAgICAgICAgcmVzdG9OYW1lLFxuICAgICAgICBjYXRjaFBocmFzZVxuICAgIClcbiAgICByZXR1cm4gY29udGVudDtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVDb250ZW50XG59OyIsImltcG9ydCBpbnN0YVBpY1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWljb24ucG5nJ1xuaW1wb3J0IGZiUGljU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1pY29uLnBuZydcbmltcG9ydCB0d3RQaWNTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXItaWNvbi5wbmcnXG5cbmNvbnN0IGNyZWF0ZU1lbnVDb250ZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcbiAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gYWxpcXVhbSBhbGlxdWV0IFxuICAgICAgICBmYWNpbGlzaXMuYDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51VGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBtZW51LFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmUsXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnTWFyZ2hlcml0YSAgJDUnKSxcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdDaGVlc2UgbiBDb3JuICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRmFybWhvdXNlICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnRnJlc2ggVmVnZ2llICQ3JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnQ2hlZXNlIG4gVG9tYXRvICQ2JyksXG4gICAgICAgICAgICBjcmVhdGVNZW51SXRlbSgnR2FybGljIGJyZWFkICQ0JylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTb2NpYWxzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc29jaWFscycpO1xuXG4gICAgICAgIGNvbnN0IGluc3RhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29uc3QgaW5zdGFQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW5zdGFQaWMuc3JjID0gaW5zdGFQaWNTcmM7XG4gICAgICAgIGluc3RhUGljLmFsdCA9ICdJbnN0YWdyYW0gbG9nbyc7XG4gICAgICAgIGluc3RhTGluay5hcHBlbmRDaGlsZChpbnN0YVBpYyk7XG5cbiAgICAgICAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBmYlBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBmYlBpYy5zcmMgPSBmYlBpY1NyYztcbiAgICAgICAgZmJQaWMuYWx0ID0gJ0ZhY2Vib29rIGxvZ28nO1xuICAgICAgICBmYkxpbmsuYXBwZW5kQ2hpbGQoZmJQaWMpO1xuXG4gICAgICAgIGNvbnN0IHR3dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IHR3dFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0d3RQaWMuc3JjID0gdHd0UGljU3JjO1xuICAgICAgICB0d3RQaWMuYWx0ID0gJ1R3aXR0ZXIgbG9nbyc7XG4gICAgICAgIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0UGljKTtcblxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICBpbnN0YUxpbmssXG4gICAgICAgICAgICBmYkxpbmssXG4gICAgICAgICAgICB0d3RMaW5rXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNZW51VGV4dCgpLFxuICAgICAgICBjcmVhdGVTb2NpYWxzKClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVDb250ZW50XG59OyIsImltcG9ydCBnaXRIdWJMb2dvU3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9naXRodWItaWNvbi5wbmcnO1xuXG5jb25zdCBjcmVhdGVNYWluRm9vdGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtYWluTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1NhbmthcmktSy9yZXN0YXVyYW50LXBhZ2UnKTtcbiAgICBtYWluTGluay50ZXh0Q29udGVudCA9ICdTYW5rYXJpIEthcnRoaWsnO1xuICAgIG1haW5MaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgICdfYmxhbmsnKTtcbiAgICBcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0aHViTG9nby5zcmMgPSBnaXRIdWJMb2dvU3JjO1xuICAgIGdpdGh1YkxvZ28uYWx0ID0gJ2dpdGh1YiBsb2dvJztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5hcHBlbmQoXG4gICAgICAgIGdpdGh1YkxvZ28sIFxuICAgICAgICBtYWluTGlua1xuICAgIClcbiAgICByZXR1cm4gZm9vdGVyO1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWFpbkZvb3RlclxufTsiLCJpbXBvcnQgYWRkcmVzc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvbG9jYXRpb24taWNvbi5wbmcnXG5pbXBvcnQgdGltaW5nc1NyYyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdGltaW5ncy1pY29uLnBuZydcbmltcG9ydCBjb250YWN0U3JjIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jb250YWN0LWljb24ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVBZGRyZXNzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICdsb2NhdGlvbiBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJzEyMyBIaWxsdmlldyBEcml2ZSwgUG9ydGxhbmQgT1IgfCc7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUaW1pbmdzID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IHRpbWluZ3NTcmM7XG4gICAgICAgIGltYWdlLmFsdCA9ICd0aW1pbmdzIGljb24nO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Vla2RheXMgMTBBTSAtIDJQTSwgV2Vla2VuZHMgOUFNIC0gMlBNIHwnO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0U3JjO1xuICAgICAgICBpbWFnZS5hbHQgPSAnY29udGFjdCBpY29uJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyg5ODcpIDY1NC0zMjAxJztcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJyk7XG4gICAgbWFpbkhlYWRlci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUFkZHJlc3MoKSxcbiAgICAgICAgY3JlYXRlVGltaW5ncygpLFxuICAgICAgICBjcmVhdGVDb250YWN0KClcbiAgICApXG4gICAgcmV0dXJuIG1haW5IZWFkZXI7XG59KTtcblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW5IZWFkZXJcbn07IiwiaW1wb3J0IGxvZ29JbWdTcmMgZnJvbSAnLi4vLi4vYXNzZXRzL2xvZ28ucG5nJ1xuXG5jb25zdCBjcmVhdGVNYWluTmF2ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbG9nb0ltZy5zcmMgPSBsb2dvSW1nU3JjO1xuXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgICAgIGxvZ28uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgIH1cblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2aWdhdGlvbicpO1xuICAgIG1haW5EaXYuYXBwZW5kKFxuICAgICAgICBob21lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgY3JlYXRlTG9nbygpLFxuICAgICAgICBtZW51LCBcbiAgICAgICAgY29udGFjdFxuICAgIClcbiAgICByZXR1cm4gbWFpbkRpdjtcbn0pO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW5OYXZcbn07IiwiaW1wb3J0IHsgY3JlYXRlQWJvdXRDb250ZW50IH0gZnJvbSBcIi4uL2Fib3V0LWNvbnRlbnQvYWJvdXQtY29udGVudFwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkZvb3RlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4tZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluSGVhZGVyIH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5OYXYgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLW5hdlwiO1xuXG5jb25zdCBjcmVhdGVBYm91dFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZChcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcigpLFxuICAgICAgICBjcmVhdGVNYWluTmF2KCksXG4gICAgICAgIGNyZWF0ZUFib3V0Q29udGVudCgpLFxuICAgICAgICBjcmVhdGVNYWluRm9vdGVyKClcbiAgICApXG4gICAgcmV0dXJuIGJvZHk7XG59KVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUFib3V0UGFnZVxufTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lQ29udGVudCB9IGZyb20gJy4uL2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQnO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkZvb3RlciB9IGZyb20gJy4uL3BhZ2UtZWxlbWVudHMvbWFpbi1mb290ZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkhlYWRlciB9IGZyb20gJy4uL3BhZ2UtZWxlbWVudHMvbWFpbi1oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlTWFpbk5hdiB9IGZyb20gJy4uL3BhZ2UtZWxlbWVudHMvbWFpbi1uYXYnO1xuXG5jb25zdCBjcmVhdGVIb21lUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgIGJvZHkuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNYWluSGVhZGVyKCksXG4gICAgICAgIGNyZWF0ZU1haW5OYXYoKSxcbiAgICAgICAgY3JlYXRlSG9tZUNvbnRlbnQoKSxcbiAgICAgICAgY3JlYXRlTWFpbkZvb3RlcigpXG4gICAgKVxuICAgIHJldHVybiBib2R5O1xufSk7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSG9tZVBhZ2Vcbn07IiwiaW1wb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQgfSBmcm9tIFwiLi4vbWVudS1jb250ZW50L21lbnUtY29udGVudFwiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkZvb3RlciB9IGZyb20gXCIuLi9wYWdlLWVsZW1lbnRzL21haW4tZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluSGVhZGVyIH0gZnJvbSBcIi4uL3BhZ2UtZWxlbWVudHMvbWFpbi1oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5OYXYgfSBmcm9tIFwiLi4vcGFnZS1lbGVtZW50cy9tYWluLW5hdlwiO1xuXG5jb25zdCBjcmVhdGVNZW51UGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgIGJvZHkuYXBwZW5kKFxuICAgICAgICBjcmVhdGVNYWluSGVhZGVyKCksXG4gICAgICAgIGNyZWF0ZU1haW5OYXYoKSxcbiAgICAgICAgY3JlYXRlTWVudUNvbnRlbnQoKSxcbiAgICAgICAgY3JlYXRlTWFpbkZvb3RlcigpXG4gICAgKVxuICAgIHJldHVybiBib2R5O1xufSlcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNZW51UGFnZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGNvbnNvbGUubG9nKFwiSGV5YSFcIik7XG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gXCIuL21vZHVsZXMvcGFnZXMvaG9tZS1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VzL2Fib3V0LXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlcy9tZW51LXBhZ2VcIjtcblxuLy8gY3JlYXRlSG9tZVBhZ2UoKTtcbi8vIGNyZWF0ZUFib3V0UGFnZSgpO1xuY3JlYXRlTWVudVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=