// "use strict";

import {
  threadViewHandler,
  customRouteViewHandler,
  threadRowViewViewHandler
} from "./handlers";
import { createConnectionsNavItem } from "./connections";
import { getAssetUrl } from "./utils";

Promise.all([InboxSDK.load(2, "sdk_shakirthow_df46724836")]).then(results => {
  var sdk = results[0];
  var composeBox = null;
  var composeBoxInRight = true;
  var sideBar, tdLeft, tdRight;

  console.log("A TEAM HAS NO NAME!");

  sdk.Conversations.registerThreadViewHandler(threadViewHandler);
  sdk.Router.handleCustomRoute(customRouteViewHandler);
  sdk.NavMenu.addNavItem(createConnectionsNavItem());
  sdk.Lists.registerThreadRowViewHandler(threadRowViewViewHandler);

  sdk.Compose.registerComposeViewHandler(function(composeView) {
    var el = document.createElement("div");
    var DrawerView = null;
    el.className = "";
    el.innerHTML = "<h4>Spokeo Sidebar</h4>";

    buildCustomSideBar();

    composeView.addButton({
      title: "Spokeo Insights",
      iconClass: "spokeo-button",
      iconUrl: getAssetUrl("assets/Logo-Black.png"),
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
