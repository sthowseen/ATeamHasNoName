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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAssetUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = createContact;
function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

function createContact(person) {
  console.log(person);
  return {
    name: getName(person),
    location: getLocation(person),
    avatar: getAvatar(person),
    usernames: getUsernames(person)
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

function getUsernames(person) {
  if (person.username_sources.length > 0) { 
    return [
      {username: person.username_sources[0].username || '', avatar: person.username_sources[0].profile_photo.src || ''},
      {username: person.username_sources[1].username || '', avatar: person.username_sources[1].profile_photo.src || ''}
    ]
  } else {
    return [{
      username: 'coolguy', avatar: getAvatar(person)
    }];
  }
}

/***/ }),
/* 1 */
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebarList__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebarProfile__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebarList__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebarProfile__["a"]; });





/* harmony default export */ __webpack_exports__["a"] = (() => {
  let el = document.createElement('div')
  el.className = 'spokeo-sidebar';
  el.innerHTML = '<div class="spokeo-sidebar-content"></div><div style="display: none;" class="profile-back">back &#8594;</div>'
  return el;
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
// "use strict";





Promise.all([InboxSDK.load(2, "sdk_shakirthow_df46724836")]).then(results => {
  var sdk = results[0];
  console.log("A TEAM HAS NO NAME!");

  sdk.Conversations.registerThreadViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["d" /* threadViewHandler */]);
  sdk.Router.handleCustomRoute(__WEBPACK_IMPORTED_MODULE_0__handlers__["b" /* customRouteViewHandler */]);
  sdk.NavMenu.addNavItem(Object(__WEBPACK_IMPORTED_MODULE_1__connections__["a" /* createConnectionsNavItem */])());
  sdk.Lists.registerThreadRowViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["c" /* threadRowViewViewHandler */]);
  sdk.Compose.registerComposeViewHandler(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* composeViewHandler */]);
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__threadRowViewHandler__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composeViewHandler__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__threadViewHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__customRouteViewHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__threadRowViewHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__composeViewHandler__["a"]; });








/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar__ = __webpack_require__(2);




var userEmails = undefined;
var el = Object(__WEBPACK_IMPORTED_MODULE_2__sidebar__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (threadView => {
  el.firstChild.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_2__sidebar__["b" /* sidebarList */])();

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

  userEmails = users.map(function(user) {
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
  $('.profile-back').click(function(){
    el.firstChild.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_2__sidebar__["b" /* sidebarList */])();
    addCounter(resp.length);
    let contacts = [];
    resp.forEach(person => {
      let contact = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* createContact */])(person);
      contacts.push(contact);
      createContactSummaryItem(contact);
    });

    $('.profile-back').hide();
  })

  let contacts = [];
  addCounter(resp.length);

  resp.forEach(person => {
    let contact = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* createContact */])(person);
    contacts.push(contact);
    createContactSummaryItem(contact);
  });

  Object(__WEBPACK_IMPORTED_MODULE_1__connections__["b" /* syncContacts */])(contacts);
}

function createContactSummaryItem(contact) {
  $('<div />', {
    class: 'spokeo-contact',
    html: formatContact(contact)
  }).appendTo($('.spokeo-contacts')).on('click', (e) => {
    $('.spokeo-sidebar-content').html(Object(__WEBPACK_IMPORTED_MODULE_2__sidebar__["c" /* sidebarProfile */])(contact));
    $('.profile-back').show();
  });
}

function addCounter(counter) {
  $('.spk-counter').text(counter);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
  return `<h4>Spokeo Sidebar</h4><div class="spokeo-contacts"></div><div class="spk-counter"></div>`;
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (contact => {
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <div class="profile-hero-avatar"><img src="${contact.avatar}" width="70" height="70" /></div>
        <h2>${contact.name}</h2>
        <h3>${contact.location}</h3>
      </div>

      <div class="profile-section work">
        <h4>Work</h4>
        ${workInfo(contact)}
      </div>

      <div class="profile-section social">
        <h4>Social</h4>
        ${socialInfo(contact)}
        <a href="https://feature12.qa.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="floating-link" target="_blank">view 12 more &#8594;</a>
      </div>

      <div class="profile-section ">
        <h4>Contact</h4>
        ${contactInfo(contact)}
        <a href="https://feature12.qa.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="floating-link" target="_blank">view 12 more &#8594;</a>
      </div>

        <a href="https://feature12.qa.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="button secondary" target="_blank">View Spokeo Profile &#8594;</a>
    </div>`;
});

function workInfo(contact) {
  let workInfo = getWorkInfo();
  return `
    <div class="work-item">
      <h2>${workInfo.title}</h2>
      <span>${workInfo.company}</span>
      <span>${workInfo.duration}</span>
    </div>`;
}

function socialInfo(contact) {
  let socialInfo = '';

  for (let i = 0; i < contact.usernames.length; i++) {
    socialInfo += `<div class="social-item">
        <div class="social-item-avatar">
        <img src="${contact.usernames[i].avatar}" width="30" height="30" />
      </div>
      <div class="social-item-details">
        <h2>${contact.name}</h2>
        <span>${contact.usernames[i].username}</span>
      </div>
    </div>`
  }

  return socialInfo;
  
}

function contactInfo(contact) {
  let contactInfo = '';
  for (let i = 0; i < 2; i++) {
    contactInfo += `<div class="contact-item">
        <div class="contact-item-avatar">
        <img src="https://image.flaticon.com/icons/svg/15/15853.svg" width="30" height="30" />
      </div>
      <div class="contact-item-details">
        <h2>310-789-9823</h2>
        <span>Primary phone</span>
      </div>
    </div>`
  }

  return contactInfo;
}

function getWorkInfo() {

  const workInfo = [
    {
      title: 'Software Developer',
      company: 'Google Inc.',
      duration: '2011 - Present'
    },
    {
      title: 'Engineer',
      company: 'PG & E',
      duration: '2010 - 2012'
    },
    {
      title: 'Mechanic',
      company: 'JP Automotive',
      duration: '2005 - 2007'
    },
    {
      title: 'Teacher',
      company: 'Los Angeles Unified School Disctrict',
      duration: '2002 - 2015'
    },
    {
      title: 'College Professor',
      company: 'UCSB',
      duration: '2014 - Present'
    },
    {
      title: 'Gardener',
      company: 'Warner Bros.',
      duration: '2010 - 2011'
    }
  ]

  return workInfo[Math.ceil(Math.ceil(Math.random() * 20) / 10)];
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (customeRouteView => {
  let el = customRouteView.getElement();
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (threadRowView => {
  // let contacts = threadRowView.getContacts();
  // threadRowView.getDraftID().then(function(a){
  //   console.log(a)
  // })
  // for (let i = 0; i < contacts.length; i++) {
  //   let contact = contacts[i];

  //   threadRowView.addImage({
  //     imageUrl: getAssetUrl('assets/monkey.png'),
  //     tooltip: 'email',
  //     imageClass: 'rounded_stripe'
  //   });
  // }
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (composeView => {
  //   console.log(composeView.getBodyElement());

  //   let el = document.createElement("div");
  //   el.className = "spokeo-sidebar";
  //   el.innerHTML = "<h4>Spokeo Sidebar</h4>";

  //   let counter = document.createElement("div");
  //   counter.classList.add("spk-counter");
  //   counter.innerHTML = `${emailCount}`;

  //   let contacts = document.createElement("div");
  //   contacts.classList.add("spokeo-contacts");

  //   el.append(counter);
  //   el.appendChild(contacts);

  //   sdk.Conversations.registerThreadViewHandler(function(threadView) {
  //     var sideBar = threadView.addSidebarContentPanel({
  //       title: "TEST",
  //       iconUrl: "",
  //       id: "spokeo-sidebar",
  //       el
  //     });
  //   });
  var composeBox = null;
  var composeBoxInRight = true;
  var sideBar, tdLeft, tdRight;

  var el = document.createElement("div");
  var DrawerView = null;
  el.className = "";
  el.innerHTML = "<h4>Spokeo Sidebar</h4>";

  buildCustomSideBar();

  composeView.addButton({
    title: "Spokeo Insights",
    iconClass: "spokeo-button",
    iconUrl: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getAssetUrl */])("assets/Logo-Black.png"),
    onClick: function(event) {
      if (composeBoxInRight) {
        showSideBar();
      } else {
        hideSideBar();
      }
    },
    hasDropdown: false,
    type: "MODIFIER",
    orderHint: 0
  });

  function buildCustomSideBar() {
    if (!document.getElementById("spokeo-sidebar-main")) {
      var maindiv = null;
      var alldivs = document.getElementsByTagName("div");

      for (var i = 0; i < alldivs.length; i++) {
        if (alldivs[i].getAttribute("role") == "main") maindiv = alldivs[i];
      }
      if (maindiv) {
        var table = document.createElement("div");
        tdLeft = document.createElement("div");
        tdLeft.className = "spokeo-sidebar-hack-left";
        tdRight = document.createElement("div");
        tdRight.className = "spokeo-sidebar-hack-right";

        sideBar = document.createElement("div");
        sideBar.id = "spokeo-sidebar-main";
        sideBar.className = "spokeo-sidebar-hack";
        sideBar.style.position = "relative";
        sideBar.style.width = "226px";
        sideBar.style.height = "100%";
        sideBar.style.background = "#fff";
        sideBar.innerHTML = "HELLO WORLD!";

        table.appendChild(tdLeft);
        table.appendChild(tdRight);
        tdRight.appendChild(sideBar);
        $(tdRight).css("display", "none");
        maindiv.parentNode.insertBefore(table, maindiv);
        tdLeft.appendChild(maindiv);
      }
    } else {
      $().remove();
    }
  }

  function showSideBar() {
    moveComposeBox();
    console.log("tdLeft", tdLeft);

    $(tdRight).css("display", "block");
    $(tdLeft).css("width", "calc(100% - 226px)");
  }

  function hideSideBar() {
    moveComposeBox();
    console.log("hideSideBar", tdRight);
    $(tdRight).css("display", "none");
    $(tdLeft).css("width", "100%");
  }

  function moveComposeBox() {
    var elParents = $(".inboxsdk__compose").parents();
    if (composeBoxInRight) {
      composeBox = elParents
        .filter(function() {
          return $(this).css("float") == "right";
        })
        .first();
      $(composeBox).css("margin-right", "226px");
      composeBoxInRight = false;
    } else {
      composeBox.css("margin-right", "0px");
      composeBoxInRight = true;
    }
  }
});


/***/ })
/******/ ]);