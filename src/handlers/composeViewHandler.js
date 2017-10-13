import { getAssetUrl, createContact } from "../utils";
import sidebar, { sidebarList, sidebarProfile } from "./sidebar";

export default composeView => {
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

  composeView.on("toContactAdded", function(e) {
    fetchProfiles([e.contact.emailAddress]);
    var contactPill = $(
      `.inboxsdk__compose span[email='${e.contact.emailAddress}']`
    )[0];
    $(contactPill).prepend(
      `<img class='compose-email-pill-icon' src='${getAssetUrl(
        "assets/Logo-Color.png"
      )}'/>`
    );
    $(contactPill).mouseenter(e => {
      fetchProfiles(e.currentTarget.dataset.hovercardId);
    });
  });
  composeView.on("ccContactAdded", function(e) {
    console.log(e);
  });
  composeView.on("bccContactAdded", function(e) {
    console.log(e);
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
        sideBar.className = "spokeo-sidebar-hack spokeo-sidebar spokeo-sidebar-content";
        sideBar.style.position = "relative";
        sideBar.style.width = "226px";
        sideBar.style.height = "100%";
        sideBar.style.background = "#fff";
        sideBar.innerHTML = "<h2>Spokeo Insights</h2>";

        table.appendChild(tdLeft);
        table.appendChild(tdRight);
        tdRight.appendChild(sideBar);
        $(tdRight).css("display", "none");
        maindiv.parentNode.insertBefore(table, maindiv);
        tdLeft.appendChild(maindiv);
      }
    } 
  }

  function showSideBar() {
    moveComposeBox();
    //HACk
    var conversationView = $("div").find(`[role='listitem']`);
    if (conversationView.length == 0) {
      console.log("tdLeft", tdLeft);
      $('.spokeo-sidebar-hack-right').css("display", "block");
      $(tdLeft).css("width", "calc(100% - 226px)");
    }
  }

  function hideSideBar() {
    moveComposeBox();
    //HACK
    var conversationView = $("div").find(`[role='listitem']`);
    if (conversationView.length == 0) {
      console.log("hideSideBar", '.spokeo-sidebar-hack-right');
      $('.spokeo-sidebar-hack-right').css("display", "none");
      $(tdLeft).css("width", "100%");
    }
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

  function fetchProfiles(userEmail) {
    console.log("****USERS****", userEmail);
    $.get(
      `https://feature1.qa.spokeo.com/hackathon/search?e=${userEmail}`,
      updateUI
    );
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

  function updateUI(resp) {
    // resp = JSON.parse(resp);
    console.log("updateUI", resp);
    resp.forEach(person => {
      let contact = createContact(person);
      console.log(person);
      $(".spokeo-sidebar-content").html(sidebarProfile(contact));
      $('.profile-back').show();
    });
  }
};
