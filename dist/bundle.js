/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(1);




Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  let sdk = results[0];

  console.log('A TEAM HAS NO NAME!')

  sdk.Conversations.registerThreadViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["b" /* threadViewHandler */]);
  sdk.Router.handleCustomRoute(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* customRouteViewHandler */]);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (threadView => {
  let emailCount = 4;
  
  let el = document.createElement("div");
  el.className = 'spokeo-sidebar'
  el.innerHTML = "<h4>Spokeo Subtitle</h4>";

  let counter = document.createElement('div')
  counter.classList.add('spk-counter');
  counter.innerHTML = `${emailCount}`;

  el.append(counter);

  var views = threadView.getMessageViews();

  views.forEach(function(view) {
    var sender = view.getSender();
    var recipients = view.getRecipients();
    console.log(sender);
    console.log(recipients);
  });

  var sideBar = threadView.addSidebarContentPanel({
    title: "",
    iconUrl: '',
    el,
    id: 'spokeo-sidebar',
  });

  //Hack to force display side bar
  var sideBarEl = $(`[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation._sidebarId}']`)[0];
  $(sideBarEl).first().css( "display", "block !important" );
});


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAssetUrl */
function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (customeRouteView => {
  let el = customRouteView.getElement();
});


/***/ })
/******/ ]);