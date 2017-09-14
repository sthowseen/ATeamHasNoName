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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (threadView => {
  let emailCount = 4;

  let el = document.createElement('div');
  el.className = 'spokeo-sidebar';
  el.innerHTML = '<h4>Spokeo Sidebar</h4>';

  let counter = document.createElement('div');
  counter.classList.add('spk-counter');
  counter.innerHTML = `${emailCount}`;

  let contacts = document.createElement('div');
  contacts.classList.add('spokeo-contacts');

  el.append(counter);
  el.appendChild(contacts);

  var sideBar = threadView.addSidebarContentPanel({
    title: '',
    iconUrl: '',
    id: 'spokeo-sidebar',
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
    console.log(user);
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
    .css('display', 'block !important');
});

function updateUI(resp) {
  resp = JSON.parse(resp);
  $('.spk-counter').text(resp.length);

  let contacts = [];
  resp.forEach(person => {
    let contact = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* createContact */])(person);
    contacts.push(contact);
    $('<div />', {
      class: 'spokeo-contact',
      html: formatContact(contact)
    }).appendTo($('.spokeo-contacts'));
  });

  Object(__WEBPACK_IMPORTED_MODULE_1__connections__["b" /* syncContacts */])(contacts);
}

function formatContact(contact) {
  return `
    <div class="spokeo-contact-avatar">
      <img src="${contact.avatar}" width="40" height="40" />
    </div>
    <div class="spokeo-contact-details">
      <h2>${contact.name}</h2>
      <h3>${contact.location}</h3>
    </div>
  `;
}

function fetchProfiles(userEmails) {
  console.log('****USERS****', userEmails);
  $.get(
    `https://feature12.qa.spokeo.com/hackathon/search?e=${userEmails.join(
      ','
    )}`,
    updateUI
  );
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAssetUrl */
/* harmony export (immutable) */ __webpack_exports__["a"] = createContact;
function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

function createContact(person) {
  return {
    name: getName(person),
    location: getLocation(person),
    avatar: getAvatar(person)
  }
}

function getName(person) {
  return (
    person.aggregate_info.name ||
    person.aggregate_info.email ||
    person.aggregate_info.username
  );
}

function getLocation(person) {
  return person.aggregate_info.location || '';
}

function getAvatar(person) {
  return (
    (person.aggregate_info.profile_photo &&
      person.aggregate_info.profile_photo.src) ||
    'https://pbs.twimg.com/profile_images/477397164453527552/uh2w1u1o_400x400.jpeg'
  );
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
/* harmony export (immutable) */ __webpack_exports__["b"] = syncContacts;
/* harmony export (immutable) */ __webpack_exports__["a"] = createConnectionsNavItem;
function syncContacts(contacts) {
  console.log('syncContacts', contacts);
  let data = contacts.map(contact => createConnectionsContact(contact))
  console.log('data', data)
}

function createConnectionsContact(contact) {
  console.log(contact)
  debugger
  return {
    first_name: contact.name,
    // last_name: null,
    // phone: [{ number: '601-928-8475', type: 'other' }],
    email: [{ address: contact.email, type: 'other' }],
    // address: [
    //   {
    //     street: '280 Flint Creek Rd',
    //     region: 'MS',
    //     city: 'Wiggins',
    //     postal_code: '39577',
    //     formatted: '280 Flint Creek Rd, Wiggins, MS 39577',
    //     type: 'other'
    //   }
    // ],
    groups: ['Contacts'],
    // companies: nil,
    // photos: nil,
    locations: [contact.location]
  };
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