import { fetchProfiles } from '../api';
import { getAssetUrl, createContact } from '../utils';
import { syncContacts } from '../connections';
import sidebar, { sidebarList, sidebarProfile } from './sidebar';

var userEmails = undefined;
var el = sidebar();

export default userEmail => threadView => {
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

  $('.spokeo-sidebar-hack-right').css('display', 'none');

  var userEmails = users.map(user => user.emailAddress);
  fetchProfiles(userEmails).then(profiles => {
    let contacts = profiles.map(createContact);
    // attach userEmail to contact if it's not set
    contacts
      .filter(
        contact => !contact.email && userEmail.indexOf(contact.name) === 0
      )
      .forEach(contact => {
        contact.email = userEmail;
      });
    contacts = contacts.filter(contact => !!contact.email);
    updateUI(contacts);
    syncContacts(userEmail, contacts);
  });

  //Hack to force display side bar
  var sideBarEl = $(
    `[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation._sidebarId}']`
  )[0];
  $(sideBarEl)
    .first()
    .css('display', 'block !important');
};

function updateUI(contacts) {
  const _updateUI = () => {
    console.log('threadViewHandler._updateUI', contacts)
    addCounter(contacts.length);
    contacts.forEach(contact => {
      createContactSummaryItem(contact);
    });
  };

  $('.profile-back').click(function() {
    el.firstChild.innerHTML = sidebarList();
    _updateUI();
    $('.profile-back').hide();
  });

  _updateUI();
}

function createContactSummaryItem(contact) {
  $('<div />', {
    class: 'spokeo-contact',
    html: formatContact(contact)
  })
    .appendTo($('.spokeo-contacts'))
    .on('click', e => {
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
