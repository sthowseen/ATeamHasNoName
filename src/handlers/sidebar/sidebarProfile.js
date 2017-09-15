export default contact => {
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <div class="profile-hero-avatar"><img src="${contact.avatar}" width="70" height="70" /></div>
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
        <a href="https://www.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="floating-link" target="_blank">view 12 more &#8594;</a>
      </div>

      <div class="profile-section ">
        <h4>Contact</h4>
        ${contactInfo(contact)}
        <a href="https://www.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="floating-link" target="_blank">view 12 more &#8594;</a>
      </div>

        <a href="https://www.spokeo.com/social/profile?q=${contact.usernames[0].username}" class="button secondary" target="_blank">View Spokeo Profile &#8594;</a>
    </div>`;
}

function workInfo(contact) {
  let workInfo = getWorkInfo();
  return `
    <div class="work-item">
      <h2>${workInfo.title}</h2>
      <span>${workInfo.company}</span>
      <span>${workInfo.duration}</span>
    </div>`;
}

function socialInfo(contact) {
  let socialInfo = '';

  for (let i = 0; i < contact.usernames.length; i++) {
    socialInfo += `<div class="social-item">
        <div class="social-item-avatar">
        <img src="${contact.usernames[i].avatar}" width="30" height="30" />
      </div>
      <div class="social-item-details">
        <h2>${contact.name}</h2>
        <span>${contact.usernames[i].username}</span>
      </div>
    </div>`
  }

  return socialInfo;
  
}

function contactInfo(contact) {
  let contactInfo = '';
  for (let i = 0; i < 2; i++) {
    contactInfo += `<div class="contact-item">
        <div class="contact-item-avatar">
        <img src="https://image.flaticon.com/icons/svg/15/15853.svg" width="30" height="30" />
      </div>
      <div class="contact-item-details">
        <h2>310-789-9823</h2>
        <span>Primary phone</span>
      </div>
    </div>`
  }

  return contactInfo;
}

function getWorkInfo() {

  const workInfo = [
    {
      title: 'Software Developer',
      company: 'Google Inc.',
      duration: '2011 - Present'
    },
    {
      title: 'Engineer',
      company: 'PG & E',
      duration: '2010 - 2012'
    },
    {
      title: 'Mechanic',
      company: 'JP Automotive',
      duration: '2005 - 2007'
    },
    {
      title: 'Teacher',
      company: 'Los Angeles Unified School Disctrict',
      duration: '2002 - 2015'
    },
    {
      title: 'College Professor',
      company: 'UCSB',
      duration: '2014 - Present'
    },
    {
      title: 'Gardener',
      company: 'Warner Bros.',
      duration: '2010 - 2011'
    }
  ]

  return workInfo[Math.ceil(Math.ceil(Math.random() * 20) / 10)];
}