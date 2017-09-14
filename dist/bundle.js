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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections__ = __webpack_require__(5);





Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  let sdk = results[0];

  console.log('A TEAM HAS NO NAME!')

  sdk.Conversations.registerThreadViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["b" /* threadViewHandler */]);
  sdk.Router.handleCustomRoute(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* customRouteViewHandler */]);

  sdk.NavMenu.addNavItem(Object(__WEBPACK_IMPORTED_MODULE_1__connections__["a" /* createConnectionsNavItem */])());
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (threadView => {
  let emailCount = 4;

  let el = document.createElement("div");
  el.className = "spokeo-sidebar";
  el.innerHTML = "<h4>Spokeo Sidebar</h4>";

  let counter = document.createElement("div");
  counter.classList.add("spk-counter");
  counter.innerHTML = `${emailCount}`;

  let contacts = document.createElement("div");
  contacts.classList.add("spokeo-contacts");

  el.append(counter);
  el.appendChild(contacts);

  var sideBar = threadView.addSidebarContentPanel({
    title: "",
    iconUrl: "",
    id: "spokeo-sidebar",
    el
  });

  var views = threadView.getMessageViews();
  var users = [];
  views.forEach(function(view) {
    var sender = view.getSender();
    var recipients = view.getRecipients();
    users.push(sender);
    users = users.concat(recipients);
  });

  var userEmails = users.map(function(user) {
    console.log(user)
    return user.emailAddress;
  });
  fetchProfiles(userEmails);

  //Hack to force display side bar
  var sideBarEl = $(
    `[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation
      ._sidebarId}']`
  )[0];
  $(sideBarEl)
    .first()
    .css("display", "block !important");
});

function updateUI(resp) {
  resp = JSON.parse(resp);
  $(".spk-counter").text(resp.length);

  resp.forEach(person => {
    $("<div />", {
      class: "spokeo-contact",
      html: contact(person)
    }).appendTo($(".spokeo-contacts"));
  });
}

function contact(person) {
  console.log(person)
  return `
    <div class="spokeo-contact-avatar">
      <img src="${getAvatar(person)}" width="40" height="40" />
    </div>
    <div class="spokeo-contact-details">
      <h2>${getName(person)}</h2>
      <h3>${getLocation(person)}</h3>
    </div>
  `;
}

function getName(person){
  return person.aggregate_info.name || person.username_sources[0].realname
}

function getLocation(person){
  return person.aggregate_info.location || 'Los Angeles, CA'
}

function getAvatar(person){
  return person.aggregate_info.profile_photo.src || 'https://pbs.twimg.com/profile_images/477397164453527552/uh2w1u1o_400x400.jpeg'
}



function fetchProfiles(userEmails) {
  console.log("****USERS****");
  console.log(userEmails);
  $.get(
    `https://feature12.qa.spokeo.com/hackathon/search?e=${userEmails.join(
      ","
    )}`,
    updateUI
  );
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAssetUrl */
function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (customeRouteView => {
  let el = customRouteView.getElement();
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createConnectionsNavItem;
function syncContacts(...args) {
  console.log(...args)
  alert('sync contacts')
}




function createConnectionsNavItem() {
  return {
    name: 'Spokeo Connections',
    iconUrl: '',
    onClick: syncContacts
  };
}


/***/ })
/******/ ]);