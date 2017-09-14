import { getAssetUrl } from "../utils";

export default threadView => {
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
};

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
