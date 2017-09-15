import { fetchProfiles } from '../api';
import { getAssetUrl, createContact } from '../utils';
import { syncContacts } from '../connections';
import sidebar, {sidebarList, sidebarProfile} from './sidebar';



export default threadView => {
  let el = sidebar();

  el.innerHTML = sidebarList();

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

  $('.spokeo-sidebar-hack-right').css("display", "none");
  

  var userEmails = users.map(function(user) {
    console.log(user);
    return user.emailAddress;
  });
  fetchProfiles(userEmails, updateUI);

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
  if (typeof resp === 'string') {
    resp = JSON.parse(resp);
  }
  $('.spk-counter').text(resp.length);

  let contacts = [];
  resp.forEach(person => {
    let contact = createContact(person);
    contacts.push(contact);
    $('<div />', {
      class: 'spokeo-contact',
      html: formatContact(contact)
    }).appendTo($('.spokeo-contacts')).click((e) => {
      $('.spokeo-sidebar').html(sidebarProfile(contact));
    });
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
