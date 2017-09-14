export default person => {
  return `
    <div class="spokeo-sidebar-profile">
      <div class="profile-hero">
        <img src="${getAvatar(person)}" width="70" height="70" />
        <h2>${getName(person)}</h2>
        <h3>${getLocation(person)}</h3>
      </div>

      <div class="profile-section">
        <h2>Contact</h2>
        ${contactInfo(person)}
      </div>

      <div class="profile-section">
        <h2>Work</h2>
        ${workInfo(person)}
      </div>

      <div class="profile-section">
        <h2>Social</h2>
        ${socialInfo(person)}
      </div>
    </div>`;
}

function contactInfo(person) {
  
}

function workInfo(person) {

}

function socialInfo(person) {
  
}