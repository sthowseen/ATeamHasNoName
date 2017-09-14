import { getAssetUrl } from "../utils";

export default threadView => {
  let emailCount = 4;

  let el = document.createElement("div");
<<<<<<< HEAD
  el.className = 'spokeo-sidebar'
  el.innerHTML = "<h4>Spokeo Sidebar</h4>";
=======
  el.className = "spokeo-sidebar";
  el.innerHTML = "<h4>Spokeo Subtitle</h4>";
>>>>>>> ca0dffe9e6f0e94e36ec43bf2e73dd0d34a86439

  let counter = document.createElement("div");
  counter.classList.add("spk-counter");
  counter.innerHTML = `${emailCount}`;

  let contacts = document.createElement('div')
  contacts.classList.add('spokeo-contacts');

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
  $('.spk-counter').text(resp.length);
  
  
  resp.forEach((person) => {
    $('<div />', {
      class: 'spokeo-contact',
      html: contact(person)
    }).appendTo($('.spokeo-contacts'));
  });
}

function contact(person) {
  return `
    <div class="spokeo-contact-avatar">
      <img src="https://api.adorable.io/avatars/75/avatar.png" width="40" height="40" />
    </div>
    <div class="spokeo-contact-details">
      <h2>${person.name}</h2>
      <h3>${person.address.city}</h3>
    </div>
  `;
}

function fetchProfiles(userEmails) {
  console.log("****USERS****");
  console.log(userEmails);
  $.get(
    `https://feature12.qa.spokeo.com/hackathon/search?e=${userEmails.join(",")}`,
    updateUI
  );
}
