export default contact => {
  console.log(contact);
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <img src="${contact.avatar}" width="70" height="70" />
        <h2>${contact.name}</h2>
        <h3>${contact.location}</h3>
      </div>

      <div class="profile-section work">
        <h4>Work</h4>
        ${workInfo(contact)}
      </div>

      <div class="profile-section social">
        <h4>Social</h4>
        ${socialInfo(contact)}
      </div>

      <div class="profile-section ">
        <h4>Contact</h4>
        ${contactInfo(contact)}
      </div>
    </div>`;
}

function workInfo(contact) {
  let contactInfo = '';
  for (let i = 0; i < 5; i++) {
    contactInfo += `<div class="work-item">
      <h2>Software Developer</h2>
      <span>Google Inc</span>
      <span>2011 - current</span>
    </div>`
  }

  return contactInfo;
}

function socialInfo(contact) {
  let socialInfo = '';
  for (let i = 0; i < 5; i++) {
    socialInfo += `<div class="social-item">
        <div class="social-item-avatar">
        <img src="${contact.avatar}" width="30" height="30" />
      </div>
      <div class="social-item-details">
        <h2>${contact.name}</h2>
        <span>${contact.name}</span>
      </div>
    </div>`
  }

  return socialInfo;
}

function contactInfo(contact) {
  let contactInfo = '';
  for (let i = 0; i < 5; i++) {
    contactInfo += `<div class="contact-item">
        <div class="contact-item-avatar">
        <img src="${contact.avatar}" width="30" height="30" />
      </div>
      <div class="contact-item-details">
        <h2>${contact.name}</h2>
        <span>Primary phone</span>
      </div>
    </div>`
  }

  return contactInfo;
}