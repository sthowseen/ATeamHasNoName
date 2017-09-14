import { getAssetUrl, createContact } from '../utils';
import { syncContacts } from '../connections';

export default threadView => {
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
};

function updateUI(resp) {
  resp = JSON.parse(resp);
  $('.spk-counter').text(resp.length);

  let contacts = [];
  resp.forEach(person => {
    let contact = createContact(person);
    contacts.push(contact);
    $('<div />', {
      class: 'spokeo-contact',
      html: formatContact(contact)
    }).appendTo($('.spokeo-contacts'));
  });

  syncContacts(contacts);
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
