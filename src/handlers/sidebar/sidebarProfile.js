export default contact => {
  console.log(contact);
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <img src="${contact.avatar}" width="70" height="70" />
        <h2>${contact.name}</h2>
        <h3>${contact.location}</h3>
      </div>

      <div class="profile-section">
        <h4>Contact</h4>
        ${contactInfo(contact)}
      </div>

      <div class="profile-section">
        <h4>Work</h4>
        ${workInfo(contact)}
      </div>

      <div class="profile-section">
        <h4>Social</h4>
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