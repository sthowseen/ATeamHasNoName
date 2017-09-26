import React from 'react';
import ProfileSummary from './ProfileSummary';

const SidebarList = (props) => {
  console.log(contacts, 'SidebarList');
  return(
    <div className="sidebar-list">
      <h4>Spokeo Sidebar</h4>
      <div className="spokeo-contacts">
        {props.contacts && props.contacts.map((contact, i) => {
            return <ProfileSummary contact={contact} key={i}/>
          })
        }
      </div>
      <div className="spk-counter"></div>
    </div>
  );
}

export default SidebarList;


