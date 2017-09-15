import { getAssetUrl, createContact } from '../utils';
import { syncContacts } from '../connections';
import sidebar, {sidebarList, sidebarProfile} from './sidebar';

var userEmails = undefined;
var el = sidebar();

export default threadView => {
  el.firstChild.innerHTML = sidebarList();

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
};

function updateUI(resp) {
  $('.profile-back').click(function(){
    el.firstChild.innerHTML = sidebarList();
    addCounter(resp.length);
    let contacts = [];
    resp.forEach(person => {
      let contact = createContact(person);
      contacts.push(contact);
      createContactSummaryItem(contact);
    });

    $('.profile-back').hide();
  })

  let contacts = [];
  addCounter(resp.length);

  resp.forEach(person => {
    let contact = createContact(person);
    contacts.push(contact);
    createContactSummaryItem(contact);
  });

  syncContacts(contacts);
}

function createContactSummaryItem(contact) {
  $('<div />', {
    class: 'spokeo-contact',
    html: formatContact(contact)
  }).appendTo($('.spokeo-contacts')).on('click', (e) => {
    $('.spokeo-sidebar-content').html(sidebarProfile(contact));
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