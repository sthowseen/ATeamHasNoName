import { getAssetUrl } from "../utils";

export default threadView => {
  let emailCount = 4;

  let el = document.createElement("div");
  el.className = "spokeo-sidebar";
  el.innerHTML = "<h4>Spokeo Subtitle</h4>";

  let counter = document.createElement("div");
  counter.classList.add("spk-counter");
  counter.innerHTML = `${emailCount}`;

  el.append(counter);

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
};

function updateUI(resp) {
  console.log(resp);
  // $(".spokeo-sidebar").html(JSON.stringify(resp));
}

function fetchProfiles(userEmails) {
  console.log("****USERS****");
  console.log(userEmails);
  $.get(
    `https://feature12.qa.spokeo.com/hackathon/search?e=${userEmails.join(",")}`,
    updateUI
  );
}
