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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAssetUrl;
function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(2);




Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  let sdk = results[0];

  console.log('A TEAM HAS NO NAME!')

  sdk.Conversations.registerThreadViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* threadViewHandler */]);
  // sdk.Lists.registerThreadRowViewHandler(threadRowViewHandler);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__threadRowViewHandler__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__["a"]; });
/* unused harmony reexport threadRowViewHandler */






/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (threadView => {
  const el = document.createElement("div");
  el.className = 'spokeo-sidebar'
  el.innerHTML = "A Team with no name";

  var views = threadView.getMessageViews();

  views.forEach(function(view) {
    var sender = view.getSender();
    var recipients = view.getRecipients();
    console.log(sender);
    console.log(recipients);
  });

  var sideBar = threadView.addSidebarContentPanel({
    title: "Sidebar Exampleee",
    iconUrl: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getAssetUrl */])("assets/monkey.png"),
    el
  });

  //Hack to force display side bar
  var sideBarEl = $(`[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation._sidebarId}']`)[0];
  $(sideBarEl).first().css( "display", "block !important" );

  

  //   getStripeCustomerWithoutMyDomain(contact, sdk.User.getEmailAddress()).then(function(customer) {
  // 						threadRowView.addImage({
  // 							imageUrl: chrome.runtime.getURL('monkey.png'),
  // 							tooltip: "email",
  // 							imageClass: "rounded_stripe"
  // 						});
  // 				});
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (threadRowView => {
  let contacts = threadRowView.getContacts();
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    threadRowView.addImage({
      imageUrl: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getAssetUrl */])('assets/monkey.png'),
      tooltip: 'email',
      imageClass: 'rounded_stripeee'
    });
  }
});





/***/ })
/******/ ]);