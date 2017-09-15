export default contact => {
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <img src="${contact.avatar}" width="70" height="70" />
        <h2>${contact.name}</h2>
        <h3>${contact.location}</h3>
      </div>

      <div class="profile-section">
        <h2>Contact</h2>
        ${contactInfo(contact)}
      </div>

      <div class="profile-section">
        <h2>Work</h2>
        ${workInfo(contact)}
      </div>

      <div class="profile-section">
        <h2>Social</h2>
        ${socialInfo(contact)}
      </div>
    </div>`;
}

function contactInfo(contact) {
  return '';
}

function workInfo(contact) {
  return '';
}

function socialInfo(contact) {
  return '';
}