import React from 'react';

const ProfileSummary = (props) => {
  console.log(props, 'ProfileSummary');
  return(
    <div class="spokeo-profile-summary spokeo-contact">
      <div class="spokeo-contact-avatar">
        <img src={`${props.contact.avatar}`} width="40" height="40" />
      </div>
      <div class="spokeo-contact-details">
        <h2>{props.contact.name}</h2>
        <h3>{props.contact.location}</h3>
      </div>
    </div>
  )
}

export default ProfileSummary;